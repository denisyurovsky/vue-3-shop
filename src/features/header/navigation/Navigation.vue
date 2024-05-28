<template>
    <nav class="flex list-none gap-6">
        <li v-for="item in items" :key="item.label">
            <RouterLink class="text flex flex-col" :to="item.link">
                <Icon class="self-center mb-2" :name="item.icon" />
                <VText size="xs" tag="p">{{ item.label }}</VText>
                <span class="count" v-if="item.count">{{item.count}}</span>
            </RouterLink>
        </li>
    </nav>
</template>

<script setup lang="ts">
import VText from '@/shared/text';
import Icon from '@/shared/icon';

interface Props {
    items: [{label: string,
    icon: string,
    link: string,
    count: string}]
}
defineProps<Props>()
</script>

<style scoped>
.text {
  color: var(--main-on-surface);
  position: relative;
}

.count {
  position: absolute;
  right: 12px;
  top: -10px;
  color: var(--main-on-primary);
  background: var(--main-primary);
  font-size: 12px;
  padding: 0 4px;
  border-radius: 30%;
}
</style>