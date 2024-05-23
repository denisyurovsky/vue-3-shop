<template>
  <svg :height="height" :width="width" aria-hidden="true">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  prefix?: string
  name: string
  color?: string
  width: string
  height: string
}
const props = withDefaults(defineProps<Props>(), {
  prefix: 'icon',
})
const symbolId = computed(() => `#${props.prefix}-${props.name}`)

</script>