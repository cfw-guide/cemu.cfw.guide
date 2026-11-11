<script setup>
import VPHomeHero from '@theme/VPHomeHero.vue'
import VPHomeFeatures from '@theme/VPHomeFeatures.vue'
import VPHomeFooter from '@theme/VPHomeFooter.vue'
import HomeContent from './HomeContent.vue'
import '@vuepress/theme-default/components/VPHome.vue'
</script>

<template>
  <main class="vp-home">
    <VPHomeHero />
    <VPHomeFeatures />
    <HomeContent />
    <VPHomeFooter />
  </main>
</template>
