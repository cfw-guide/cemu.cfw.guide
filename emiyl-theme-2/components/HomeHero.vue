<script setup lang="ts">
import '@vuepress/theme-default/components/VPHomeHero.vue'
import AutoLink from '@theme/AutoLink.vue'
import {
  ClientOnly,
  usePageFrontmatter,
  useSiteLocaleData,
  withBase,
} from '@vuepress/client'
import type { FunctionalComponent } from 'vue'
import { computed, h } from 'vue'
import type { DefaultThemeHomePageFrontmatter } from '@vuepress/theme-default/client'
import { useDarkMode } from '@vuepress/theme-default/client'

const frontmatter = usePageFrontmatter<DefaultThemeHomePageFrontmatter>()
const siteLocale = useSiteLocaleData()
const isDarkMode = useDarkMode()

const heroImage = computed(() => {
  if (isDarkMode.value && frontmatter.value.heroImageDark !== undefined) {
    return frontmatter.value.heroImageDark
  }
  return frontmatter.value.heroImage
})
const heroFilter = computed(() => {
  if (isDarkMode.value && frontmatter.value.heroFilterDark !== undefined) {
    return frontmatter.value.heroFilterDark
  }
  return frontmatter.value.heroFilter
})
const heroColour = computed(() => {
  if (isDarkMode.value && frontmatter.value.heroColourDark !== undefined) {
    return frontmatter.value.heroColourDark
  }
  return frontmatter.value.heroColour
})
const heroAlt = computed(
  () => frontmatter.value.heroAlt || heroText.value || 'hero',
)
const heroHeight = computed(() => frontmatter.value.heroHeight || 280)

const heroText = computed(() => {
  if (frontmatter.value.heroText === null) {
    return null
  }
  return frontmatter.value.heroText || siteLocale.value.title || 'Hello'
})

const tagline = computed(() => {
  if (frontmatter.value.tagline === null) {
    return null
  }
  return (
    frontmatter.value.tagline ||
    siteLocale.value.description ||
    'Welcome to your VuePress site'
  )
})

const actions = computed(() => {
  if (!Array.isArray(frontmatter.value.actions)) {
    return []
  }

  return frontmatter.value.actions.map(({ text, link, type = 'primary' }) => ({
    text,
    link,
    type,
  }))
})

const HomeHeroImage: FunctionalComponent = () => {
  if (!heroImage.value) return null
  const img = h('img', {
    src: withBase(heroImage.value),
    alt: heroAlt.value,
    height: heroHeight.value,
  })
  if (frontmatter.value.heroImageDark === undefined) {
    return img
  }
  // wrap hero image with <ClientOnly> to avoid ssr-mismatch
  // when using a different hero image in dark mode
  return h(ClientOnly, () => img)
}
</script>

<template>
  <header class="vp-hero heroImage" :style="{
    'background-image':'linear-gradient(rgba(0, 0, 0, ' + heroFilter + '), rgba(0, 0, 0, ' + heroFilter + ')), url(' + heroImage + ')',
    'background-color': heroColour,
    'margin-top': '26px'
  }">
    <div class="heroWrapper">
      <h1 v-if="heroText" id="main-title">
        {{ heroText }}
      </h1>

      <p v-if="tagline" class="vp-hero-description">
        {{ tagline }}
      </p>

      <p v-if="actions.length" class="vp-hero-actions">
        <AutoLink
          v-for="action in actions"
          :key="action.text"
          class="vp-hero-action-button"
          :class="[action.type]"
          :config="action"
        />
      </p>
    </div>
  </header>
</template>
