<script setup lang="ts">
import { computed } from 'vue';
import type { IProps } from './types';

const props = defineProps<IProps>()
const css = computed(() => ({
  'nav-menu_active': props.show,
}))
</script>

<template>
  <nav class="main-section__nav nav-menu" :class="css">
    <ul class="nav-menu__list">
      <li class="nav-menu__list-item">
        <a href="#about-me">Обо мне</a>
      </li>
      <li class="nav-menu__list-item">
        <a href="#work">Занятия</a>
      </li>
      <li class="nav-menu__list-item">
        <a href="#">Запись</a>
      </li>
    </ul>
  </nav>
</template>
