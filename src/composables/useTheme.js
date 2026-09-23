import { ref, watchEffect } from 'vue'

const STORAGE_KEY = 'nd-theme'

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
const stored = localStorage.getItem(STORAGE_KEY)

const theme = ref(stored || (prefersDark ? 'dark' : 'light'))

watchEffect(() => {
  document.documentElement.setAttribute('data-theme', theme.value)
  localStorage.setItem(STORAGE_KEY, theme.value)
})

export function useTheme() {
  const toggle = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }
  return { theme, toggle }
}
