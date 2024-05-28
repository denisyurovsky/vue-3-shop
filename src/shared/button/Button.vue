<template>
  <button :class="classes" :disabled="disabled">
    <slot name="left-icon" />
    <slot />
    <slot name="right-icon" />
  </button>
</template>

<script setup lang="ts">

import { computed } from 'vue'
interface Props {
  disabled?: boolean;
  color?: 'primary' | 'secondary' | 'grayscale' | 'error'
  type?: 'default' | 'outline' | 'none'
  size?: 's' | 'm' | 'l'
}
const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  color: 'primary',
  type: 'default',
  size: 'm'
})

const classes = computed(() => {
  return ['button', `color_${props.color}`, `type_${props.type}`, `size_${props.size}`]
})
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.color {
  &_secondary {
    background-color: var(--main-secondary);
    color: var(--main-on-secondary)
  }
}

.decoration {
  &_default {

  }
}

.size {
  &_m {
    padding: 8px;
  }
}


</style>