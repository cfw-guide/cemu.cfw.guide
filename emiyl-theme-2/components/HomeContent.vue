<script setup>
import { Content } from 'vuepress/client'
import waldoUnits from '@temp/waldoUnits.json'
</script>

<template>
  <div vp-content>
    <Content />
    <div v-if="waldoUnits.length" :id="`waldo-tag-${waldoUnits[0]}`" style="margin-block: 1em;"></div>
    <hr>
    <div v-if="waldoUnits.length > 1" :id="`waldo-tag-${waldoUnits[1]}`" style="margin-top: 1em;"></div>
  </div>
</template>
