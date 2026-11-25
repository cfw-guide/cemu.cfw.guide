<script setup lang="ts">
defineProps<{
  title: string
  active?: boolean
}>()
</script>

<template>
  <section v-show="active" class="tab-panel" role="tabpanel">
    <slot />
  </section>
</template>
