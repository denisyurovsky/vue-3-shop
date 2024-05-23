<template>
  <component
    :class="['typography', size ? `size-${size}` : '', bold ? 'bold' : '', `tag-${tag}`]"
    :is="tag"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
interface Props {
  tag: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span'
  bold?: boolean
  size?: 'xs' | 's' | 'm' | 'l' | 'xl'
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.typography {
  font-style: normal;
  line-height: 150%;
}

.bold {
  font-weight: 700;
}

.size {
  &-xs {
    font-size: 12px;
  }
  &-s {
    font-size: 16px;
  }
  &-m {
    font-size: 18px;
  }
  &-l {
    font-size: 24px;
  }
  &-xl {
    font-size: 36px;
  }
}

.tag-h1 {
  font-size: 64px;
}
.tag-h2 {
  font-size: 48px;
}
.tag-h3 {
  font-size: 36px;
}
.tag-h4 {
  font-size: 24px;
}
.tag-h5 {
  font-size: 18px;
}

@media screen and (max-width < 768px) {
  .size {
    &-xs {
      font-size: 8px;
    }
    &-s {
      font-size: 12px;
    }
    &-m {
      font-size: 14px;
    }
    &-l {
      font-size: 20px;
    }
    &-xl {
      font-size: 32px;
    }
  }

  .tag-h1 {
    font-size: 48px;
  }
  .tag-h2 {
    font-size: 36px;
  }
  .tag-h3 {
    font-size: 24px;
  }
  .tag-h4 {
    font-size: 20px;
  }
  .tag-h5 {
    font-size: 16px;
  }
}
</style>
