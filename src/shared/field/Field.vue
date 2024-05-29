<template>
 <div :class="['field', disabled ? 'disabled' : '', `size_${props.size}`, `left-icon_${Boolean(slots.leftIcon)}`, `left-icon_${Boolean(slots.rightIcon)}`]">
   <slot name="label" />
   <div class="field__container">
     <div v-if="slots.leftIcon" class="left-icon">
       <slot name="leftIcon" />
     </div>
     <input v-model="model" :disabled="disabled" :placeholder="placeholder" :class="classes" :type="type" />
     <div v-if="slots.rightIcon" class="right-icon">
     <slot name="rightIcon" />
     </div>
   </div>
 </div>
</template>

<script setup lang="ts">

import { computed, useSlots } from 'vue'

interface Props {
  label?: string;
  disabled?: boolean;
  size?: 's' | 'm' | 'l';
  type?: string;
  placeholder?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  size: 'm'
})

const model = defineModel()

const slots = useSlots();

const classes = computed(() => {
  return ['field__input', props.disabled ? 'disabled' : '', Boolean(slots.leftIcon) ? `field__input-left-icon`: '']
})
</script>

<style scoped lang="scss">
.field {
  .right-icon, .left-icon {
    position: absolute;
  }

  &__container {
    position: relative;
  }

  &__input {
    width: 100%;
    border: 1px solid var(--grayscale-light);
    background: var(--main-surface);
    border-radius: 4px;
    color: var(--main-on-surface);

    &:focus {
      box-shadow: var(--shadow-secondary-m);
      border: 1px solid var(--main-secondary);
      caret-color: var(--main-secondary);
    }

    &:disabled {
      background: var(--grayscale-lightest);
      border: 1px solid var(--grayscale-light)
    }

    &::placeholder {
      color: var(--grayscale-hard)
    }
  }
}

.size {
  &_m {
    .right-icon {
      top: 8px;
      right: 8px;
    }
    .left-icon {
      top: 8px;
      left: 8px;
    }
    .field__input {
      padding: 8px 16px;
      font-size: 16px;

      &-left-icon {
        padding-left: 40px;
      }
    }
  }
  &_l {
    .right-icon {
      top: 8px;
      right: 8px;
    }
    .left-icon {
      top: 8px;
      left: 8px;
    }

    .field__input {
      &-left-icon {
        padding-left: 40px;
      }
    }

    padding: 12px 16px;
    font-size: 24px;
  }
}
</style>