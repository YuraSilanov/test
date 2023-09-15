<template>
  <div class="app">
    <main>
      <template v-if="posts.length">
        <Input class="app__input" placeholder="Введите для фильтрации" v-model="inputValue" />
        <PostList :prop-data="filteredPosts" />
      </template>
      <template v-else>
        <div>Загрузка</div>
      </template>
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
const posts = ref<IPost[]>([])
const filteredPosts = ref<IPost[]>([])

const delayedUpdate = debounce(() => {
  if (!inputValue.value) {
    filteredPosts.value = posts.value
  } else {
    filteredPosts.value = posts.value.filter((post) => {
      const inputValueWords = inputValue.value.toLowerCase().split(' ')
      const titleWords = post.title.toLowerCase().split(' ')

      return inputValueWords.every((word) =>
        titleWords.some((titleWord) => titleWord.includes(word))
      )
    })
  }
}, 500)

onMounted(async () => {
  posts.value = await getPosts()
  filteredPosts.value = posts.value
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
