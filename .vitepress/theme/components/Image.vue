<script setup lang="ts">
defineProps<{
  src: string
  alt: string
  darkSrc?: string
  rounded?: boolean
}>()

function isVideo(source: string) {
  return /\.(mp4|webm|ogg)$/i.test(source.split(/[?#]/)[0])
}

function videoType(source: string) {
  const extension = source.split(/[?#]/)[0].split('.').pop()?.toLowerCase()

  if (extension === 'webm') return 'video/webm'
  if (extension === 'ogg') return 'video/ogg'
  return 'video/mp4'
}
</script>

<template>
  <div
    class="guide-image"
    :class="{
      'guide-image-rounded': rounded,
      'guide-image-has-dark': darkSrc
    }"
  >
    <video
      v-if="isVideo(src)"
      class="guide-image-light"
      autoplay
      loop
      muted
      playsinline
      :aria-label="alt"
    >
      <source :src="src" :type="videoType(src)">
      {{ alt }}
    </video>
    <img
      v-else
      class="guide-image-light"
      :src="src"
      :alt="alt"
    >
    <video
      v-if="darkSrc && isVideo(darkSrc)"
      class="guide-image-dark"
      autoplay
      loop
      muted
      playsinline
      :aria-label="alt"
    >
      <source :src="darkSrc" :type="videoType(darkSrc)">
      {{ alt }}
    </video>
    <img
      v-else-if="darkSrc"
      class="guide-image-dark"
      :src="darkSrc"
      :alt="alt"
    >
  </div>
</template>
