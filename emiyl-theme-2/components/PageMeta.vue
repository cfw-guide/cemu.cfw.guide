<script setup lang="ts">
import AutoLink from '@theme/VPAutoLink.vue'
import { useData, useEditLink } from '@vuepress/theme-default/client'
import type { DefaultThemeNormalPageFrontmatter } from '@vuepress/theme-default/client'
import { useContributors, useLastUpdated } from '@vuepress/plugin-git/client'
import { computed } from 'vue'

const { frontmatter, themeLocale } = useData<
  DefaultThemeNormalPageFrontmatter & { extra_contributors?: string[] }
>()
const showContributors = computed(
  () => frontmatter.value.contributors ?? themeLocale.value.contributors ?? true,
)
const gitContributors = useContributors(() => showContributors.value)
const contributors = computed(() => {
  if (!showContributors.value) return []

  return [
    ...gitContributors.value,
    ...(frontmatter.value.extra_contributors ?? []).map(
      (name) => ({ name, email: null }),
    ),
  ]
})
const editLink = useEditLink()
const lastUpdated = useLastUpdated(
  () => frontmatter.value.lastUpdated ?? themeLocale.value.lastUpdated ?? true,
)
</script>

<template>
  <footer class="vp-page-meta">
    <div v-if="editLink" class="vp-meta-item edit-link">
      <AutoLink class="meta-item-label" :config="editLink" />
    </div>
    <div v-if="lastUpdated" class="vp-meta-item last-updated">
      <span class="meta-item-label">{{ themeLocale.lastUpdatedText ?? lastUpdated.locale }}: </span>
      <time class="meta-item-info" :datetime="lastUpdated.iso" data-allow-mismatch>
        {{ lastUpdated.text }}
      </time>
    </div>
    <div v-if="contributors.length" class="vp-meta-item contributors">
      <span class="meta-item-label">{{ themeLocale.contributorsText }}: </span>
      <span class="meta-item-info">
        <template v-for="(contributor, index) in contributors" :key="index">
          <span class="contributor" :title="contributor.email ? `email: ${contributor.email}` : undefined">
            {{ contributor.name }}
          </span>
          <template v-if="index !== contributors.length - 1">, </template>
        </template>
      </span>
    </div>
  </footer>
</template>

<style lang="scss">
@use '@vuepress/theme-default/styles/mixins';

.vp-page-meta {
  @include mixins.content-wrapper;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem;
  padding-block: 0.75rem;
  font-size: 0.875em;

  .meta-item-info {
    color: var(--vp-c-text-mute);
  }
}
</style>
