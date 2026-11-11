<script setup lang="ts">
import { AutoLink } from 'vuepress/client'
import type { AutoLinkConfig } from 'vuepress/client'

defineProps<{
  config: AutoLinkConfig
}>()
</script>

<template>
  <AutoLink :config="config">
    <template #before>
      <slot name="before" />
    </template>
    <slot v-bind="config">
      <span v-html="config.text" />
    </slot>
    <template #after>
      <slot name="after" />
    </template>
  </AutoLink>
</template>
