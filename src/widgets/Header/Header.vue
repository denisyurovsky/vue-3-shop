<template>
  <header class="header">
    <Container class="header__container">
      <Logo orientation="horizontal" bg-color="white" colorful with-text/>
      <Button class="ml-10" color="secondary">
        <template #left-icon>
          <Icon height="24" width="24" name="menu"/>
        </template>
        <VText tag="p" size="s">Каталог</VText>
      </Button>
      <Field class="ml-4" size="m" placeholder="Найти товар">
        <template #rightIcon>
          <Icon height="24" width="24" name="search" />
        </template>
      </Field>
    </Container>
  </header>
</template>

<script setup lang="ts">

import Container from '@/shared/container'
import Logo from '@/shared/logo'
import Button from '@/shared/button'
import Icon from '@/shared/icon'
import VText from '@/shared/text'
import Field from '@/shared/field'
</script>

<style scoped lang="scss">
.header {
  position: sticky;
  top: 0;
  left: 0;
  background: var(--main-surface);
  box-shadow: var(--shadow-default-s);
  &__container {
    display: flex;
    align-items: center;
    height: 72px;

  }

}
</style>