<script setup lang="ts">
import { computed } from 'vue'
import type { IProps } from './types'

const props = defineProps<IProps>()
const emits = defineEmits(['toggle'])

const css = computed(() => ({
  hamburger_active: props.isActive,
}))

const onToggle = () => {
  emits('toggle', !props.isActive)
}
</script>

<template>
  <div class="hamburger" :class="css" @click="onToggle">
    <span class="hamburger__line"></span>
    <span class="hamburger__line"></span>
    <span class="hamburger__line"></span>
  </div>
</template>
