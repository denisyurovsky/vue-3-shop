<template>
  <div class="avatar">
    <img :src="img" alt="avatar" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  img: string;
}

defineProps<Props>()
</script>

<style scoped>
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>