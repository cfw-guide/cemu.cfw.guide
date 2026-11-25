<script setup lang="ts">
import { cloneVNode, h, ref, useSlots } from 'vue'

const slots = useSlots()
const activeIndex = ref(0)

function getPanels() {
  return (slots.default?.() ?? []).filter(
    (panel) => typeof panel.type === 'object' && panel.props?.title
  )
}
</script>

<template>
  <div class="tabs">
    <div class="tab-list" role="tablist" aria-label="Options">
      <button
        v-for="(panel, index) in getPanels()"
        :key="panel.props?.title"
        class="tab-button"
        :class="{ 'is-active': activeIndex === index }"
        type="button"
        role="tab"
        :aria-selected="activeIndex === index"
        @click="activeIndex = index"
      >
        {{ panel.props?.title }}
      </button>
    </div>
    <component
      :is="h('div', getPanels().map((panel, index) =>
        cloneVNode(panel, { active: activeIndex === index })
      ))"
    />
  </div>
</template>
