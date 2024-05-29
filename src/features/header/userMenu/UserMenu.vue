<template>
  <div :class="['flex', 'items-center', 'relative', isMenuOpen && 'wrapper-list--open']">
    <Avatar class="mr-2.5" :img="avatar" />
    <VText class="mr-2.5" tag="p">{{name}}</VText>
      <Icon @click="toggleMenu" name="arrow" />
    <ul v-if="isMenuOpen" :class="['menu-list', isMenuOpen && 'menu-list--open']">
      <li class="p-2" v-for="item in menu" :key="item.label">
        <router-link v-if="item.link" :to="item.link">
          <VText tag="p" size="m">
            {{item.label}}
          </VText>
        </router-link>
        <VText @click="onAction(item.action)" tag="p" size="m" v-else>
          {{item.label}}
        </VText>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import Avatar from '@/shared/avatar'
import VText from '@/shared/text'
import Icon from '@/shared/icon'
import { ref } from 'vue'
import useUserStore from '@/entities/user'

interface Props {
  avatar: string;
  name: string;
  menu: Array<{link?: string, label: string, action?: string}>;
}

defineProps<Props>()

const isMenuOpen = ref(false);
const {logout} = useUserStore();

const onAction = (action?: string) => {
  if (action === 'logout') {
    logout();
  }
}

const toggleMenu = () => isMenuOpen.value = !isMenuOpen.value
</script>

<style lang="scss" scoped>
.menu-list {
  position: absolute;
  bottom: -86px;
  left: 0;
  width: 100%;
  border-radius: 4px;

  &--open {
    background: var(--main-surface);
    box-shadow: var(--shadow-default-s);
  }
}

.wrapper-list--open {
  box-shadow: var(--shadow-default-s);
}
</style>