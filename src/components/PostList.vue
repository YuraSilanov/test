<template>
  <ul class="post-list">
    <li class="post-list__item" v-for="(item, id) in propData" :key="id">{{ item.title }}</li>
  </ul>
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
  padding-left: $gap;
}
</style>
