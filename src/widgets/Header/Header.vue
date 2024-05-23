<template>
  <header class="header">
    <Container class="header__container">
      <Logo orientation="horizontal" bg-color="white" colorful with-text/>
      <Button color="secondary">
        <template #left-icon>
          <Icon icon="menu"/>
        </template>
        <VText tag="p" size="s">Каталог</VText>
      </Button>
    </Container>
  </header>
</template>

<script setup lang="ts">

import Container from '@/shared/container'
import Logo from '@/shared/logo'
import Button from '@/shared/button'
import Icon from '@/shared/icon'
import VText from '@/shared/text'
</script>

<style scoped lang="scss">
.header {
  position: sticky;
  top: 0;
  left: 0;
  &__container {
    display: flex;
    align-items: center;
    height: 72px;
    background: var(--main-surface);
    box-shadow: var(--shadow-default-s);

  }
}
</style>