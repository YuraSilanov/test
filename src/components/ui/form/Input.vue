<template>
  <input class="input" :placeholder="placeholder" :value="modelValue" @input="onInput" />
</template>

<script setup lang="ts">
interface IProps {
  placeholder: string
  modelValue: string
}
defineProps<IProps>()

const emit = defineEmits(['update:modelValue'])
const onInput = ($event: Event) => {
  emit('update:modelValue', ($event.target as HTMLInputElement).value)
}
</script>

<style lang="scss">
.input {
  width: 100%;
  height: 40px;
  padding: 0 $gap;
  border: 1px solid $color-text;
}
</style>
