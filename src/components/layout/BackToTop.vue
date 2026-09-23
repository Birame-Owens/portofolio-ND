<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > 500
}

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <Transition name="pop">
    <button v-if="visible" class="back-to-top" aria-label="Retour en haut" @click="scrollTop">
      <svg viewBox="0 0 24 24" fill="none"><path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
  </Transition>
</template>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 28px;
  right: 28px;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--accent-3);
  display: grid;
  place-items: center;
  box-shadow: var(--shadow-soft);
  z-index: 150;
  transition: transform var(--t-fast), box-shadow var(--t-fast), color var(--t-fast);
}

.back-to-top:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-strong);
  color: var(--accent);
}

.back-to-top svg {
  width: 20px;
  height: 20px;
}

.pop-enter-active,
.pop-leave-active {
  transition: opacity 0.3s var(--ease-out), transform 0.3s var(--ease-out);
}
.pop-enter-from,
.pop-leave-to {
  opacity: 0;
  transform: translateY(12px) scale(0.9);
}
</style>
