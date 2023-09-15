import { api } from '@/hooks/axios'

export async function getPosts() {
  try {
    const { data } = await api.get('posts')
    return data
  } catch (e) {
    console.error(e)
  }
}
