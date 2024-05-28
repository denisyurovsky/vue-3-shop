<template>
  <div class="flex items-center">
    <Avatar class="mr-2.5" :img="avatar" />
    <VText class="mr-2.5" tag="p">{{name}}</VText>
    <Button size="m">
      <Icon name="arrow" />
    </Button>
  </div>
</template>

<script setup lang="ts">
import Avatar from '@/shared/avatar'
import VText from '@/shared/text'
import Icon from '@/shared/icon'
import Button from '@/shared/button'

interface Props {
  avatar: string;
  name: string;
  menu: Array<any>;
}

defineProps<Props>()
</script>

<style scoped>

</style>