<script setup>
defineProps({
  title: { type: String, required: true },
  tools: { type: String, default: '' },
  bullets: { type: Array, default: () => [] },
  highlight: { type: String, default: '' },
  index: { type: Number, default: 0 },
})
</script>

<template>
  <div class="project-card card" v-reveal="'scale'" :style="{ '--reveal-delay': index * 0.1 + 's' }">
    <span v-if="highlight" class="highlight-badge">{{ highlight }}</span>
    <h3>{{ title }}</h3>
    <p v-if="tools" class="tools">{{ tools }}</p>
    <ul>
      <li v-for="(b, i) in bullets" :key="i">{{ b }}</li>
    </ul>
  </div>
</template>

<style scoped>
.project-card {
  padding: 28px;
  position: relative;
  height: 100%;
}

.highlight-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background: linear-gradient(135deg, var(--accent-2), var(--accent-3));
  color: #fff8ec;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 5px 12px;
  border-radius: var(--radius-pill);
  letter-spacing: 0.03em;
}

.project-card h3 {
  font-size: 1.1rem;
  max-width: 85%;
  margin-bottom: 6px;
}

.tools {
  color: var(--accent);
  font-size: 0.82rem;
  font-weight: 500;
  margin-bottom: 16px;
  letter-spacing: 0.02em;
}

.project-card ul li {
  position: relative;
  padding-left: 18px;
  margin-bottom: 9px;
  font-size: 0.9rem;
  color: var(--text-soft);
}

.project-card ul li::before {
  content: '';
  position: absolute;
  left: 2px;
  top: 8px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--accent-2);
}
</style>
