<template>
  <div class="post-list">
    <ul v-if="propData.length" class="post-list__ul">
      <li v-for="(item, id) in propData" :key="id">{{ item.title }}</li>
    </ul>
    <div class="post-list__empty">
      <strong>По вашему фильтру ничего не найдено(</strong>
    </div>
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
  &__ul {
    padding-left: $gap;
  }
}
</style>
