<script setup>
import { ref } from 'vue'

const props = defineProps({
  value: { type: Number, required: true },
  suffix: { type: String, default: '' },
  label: { type: String, required: true },
  duration: { type: Number, default: 1200 },
})

const display = ref(0)
const el = ref(null)
let started = false

function animate() {
  if (started) return
  started = true
  const start = performance.now()
  const from = 0
  const to = props.value

  function step(now) {
    const progress = Math.min((now - start) / props.duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    display.value = Math.round(from + (to - from) * eased)
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => e.isIntersecting && animate())
}, { threshold: 0.4 })

function onMountedEl(node) {
  el.value = node
  if (node) observer.observe(node)
}
</script>

<template>
  <div class="stat" :ref="onMountedEl">
    <span class="stat-value">{{ display }}{{ suffix }}</span>
    <span class="stat-label">{{ label }}</span>
  </div>
</template>

<style scoped>
.stat {
  text-align: center;
}
.stat-value {
  display: block;
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  color: var(--accent-3);
  font-weight: 700;
}
[data-theme='dark'] .stat-value {
  color: var(--accent);
}
.stat-label {
  font-size: 0.85rem;
  color: var(--text-muted);
  letter-spacing: 0.04em;
}
</style>
