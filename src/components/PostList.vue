<template>
  <div class="post-list">
    <div class="post-list__item" v-for="(item, id) in propData" :key="id">{{ item.title }}</div>
  </div>
</template>

<script setup lang="ts">
import type { IPost } from '@/interfaces'

interface IProps {
  propData: IPost[]
}
defineProps<IProps>()
</script>

<style lang="scss">
.post-list {
  display: flex;
  flex-wrap: wrap;
  gap: $gap;

  &__item {
    padding: $gap;
    border: 1px solid $color-text;
  }
}
</style>
