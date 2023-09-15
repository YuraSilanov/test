import { ref, type Ref } from 'vue'
import axios from 'axios'

function createErrorInterceptor(errorRef: Ref<string>) {
  return (err: { response: { data: { message: string } } }) => {
    errorRef.value = err.response?.data.message || 'Произошла ошибка'
    alert('Произошла ошибка')
    return Promise.reject(err)
  }
}

function createAxiosInstance(baseURL: string) {
  const instance = axios.create({
    baseURL
  })

  const error = ref('')

  instance.interceptors.response.use((response) => response, createErrorInterceptor(error))

  return { instance, error }
}

const { instance: api } = createAxiosInstance(import.meta.env.VITE_API)

export { api }
