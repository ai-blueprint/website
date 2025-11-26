<template>
  <svg
    :class="iconClass"
    :width="size"
    :height="size"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
  </svg>
</template>

<script setup>
import { computed } from 'vue'

// eslint-disable-next-line no-undef
const props = defineProps({
  size: {
    type: [Number, String],
    default: 20
  },
  color: {
    type: String,
    default: ''
  },
  className: {
    type: String,
    default: ''
  }
})

const iconClass = computed(() => {
  const classes = ['icon']
  if (props.className) {
    classes.push(props.className)
  }
  return classes.join(' ')
})
</script>

<style scoped>
.icon {
  flex-shrink: 0;
  transition: all 0.3s ease;
}
</style>