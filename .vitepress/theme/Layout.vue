<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

const { frontmatter } = useData()
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-before>
      <div v-if="frontmatter.title" class="vp-doc">
        <h1>{{ frontmatter.title }}</h1>
      </div>
      <br>
      <div class="tip custom-block">
        <p class="custom-block-title">TIP</p>
        <p>
          If you need further help, ask on the official Cemu <a href="https://discord.gg/5psYsup" target="_blank" rel="noreferrer">Discord Server</a> for assistance.
        </p>
      </div>
      <div id="waldo-tag-8408" style="margin-bottom: 1em;"></div>
    </template>
    <template #doc-footer-before>
      <div id="waldo-tag-8442"></div>
    </template>
  </Layout>
</template>
