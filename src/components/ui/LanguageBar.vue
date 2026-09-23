<script setup>
import { ref } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
  level: { type: String, required: true },
  percent: { type: Number, required: true },
  index: { type: Number, default: 0 },
})

const filled = ref(false)
const el = ref(null)

const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      setTimeout(() => (filled.value = true), props.index * 150)
      observer.unobserve(e.target)
    }
  })
}, { threshold: 0.4 })

function setRef(node) {
  el.value = node
  if (node) observer.observe(node)
}
</script>

<template>
  <div class="lang" :ref="setRef">
    <div class="lang-head">
      <span class="lang-name">{{ name }}</span>
      <span class="lang-level">{{ level }}</span>
    </div>
    <div class="lang-track">
      <div class="lang-fill" :style="{ width: filled ? percent + '%' : '0%' }"></div>
    </div>
  </div>
</template>

<style scoped>
.lang {
  margin-bottom: 22px;
}
.lang-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 8px;
  gap: 12px;
}
.lang-name {
  font-family: var(--font-display);
  font-weight: 600;
  color: var(--text);
}
.lang-level {
  font-size: 0.8rem;
  color: var(--text-muted);
}
.lang-track {
  height: 6px;
  border-radius: var(--radius-pill);
  background: var(--accent-soft);
  overflow: hidden;
}
.lang-fill {
  height: 100%;
  border-radius: var(--radius-pill);
  background: linear-gradient(90deg, var(--accent-2), var(--accent-3));
  transition: width 1.1s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
