<template>
  <div class="app">
    <main>
      <Input class="app__input" placeholder="Введите для фильтрации" v-model="inputValue" />
      <PostList :prop-data="filteredPosts" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { debounce } from 'lodash'
import { onMounted, ref, watch } from 'vue'
import { getPosts } from './services/posts'

import Input from './components/ui/form/Input.vue'
import PostList from './components/PostList.vue'
import type { IPost } from './interfaces'

const inputValue = ref('')
let posts: IPost[] = []
const filteredPosts = ref<IPost[]>([])

const delayedUpdate = debounce(() => {
  if (!inputValue.value) {
    filteredPosts.value = posts
  } else {
    filteredPosts.value = posts.filter((post) => post.title.includes(inputValue.value))
  }
}, 500)

onMounted(async () => {
  posts = await getPosts()
  filteredPosts.value = posts
})

watch(inputValue, () => {
  delayedUpdate()
})
</script>

<style lang="scss">
.app {
  padding: $gap;

  &__input {
    margin-bottom: $gap;
  }
}
</style>
