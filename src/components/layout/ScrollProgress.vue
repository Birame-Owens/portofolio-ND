<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const progress = ref(0)

function onScroll() {
  const h = document.documentElement
  const scrollTop = h.scrollTop
  const max = h.scrollHeight - h.clientHeight
  progress.value = max > 0 ? (scrollTop / max) * 100 : 0
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <div class="scroll-progress" :style="{ width: progress + '%' }"></div>
</template>

<style scoped>
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent-2), var(--accent-3), var(--gold));
  z-index: 200;
  transition: width 0.1s linear;
}
</style>
