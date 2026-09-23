<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  date: { type: String, default: '' },
  bullets: { type: Array, default: () => [] },
  index: { type: Number, default: 0 },
})
</script>

<template>
  <div class="timeline-item" v-reveal :style="{ '--reveal-delay': index * 0.12 + 's' }">
    <div class="timeline-dot"></div>
    <div class="timeline-content card">
      <span v-if="date" class="timeline-date">{{ date }}</span>
      <h3>{{ title }}</h3>
      <p v-if="subtitle" class="timeline-subtitle">{{ subtitle }}</p>
      <ul v-if="bullets.length" class="timeline-bullets">
        <li v-for="(b, i) in bullets" :key="i">{{ b }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.timeline-item {
  position: relative;
  padding-left: 40px;
  padding-bottom: 8px;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 6px;
  bottom: -8px;
  width: 1px;
  background: var(--border);
}

.timeline-item:last-child::before {
  display: none;
}

.timeline-dot {
  position: absolute;
  left: 0;
  top: 6px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: var(--surface);
  border: 2px solid var(--accent-2);
}

.timeline-content {
  padding: 26px 28px;
}

.timeline-date {
  display: inline-block;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 600;
  margin-bottom: 6px;
}

.timeline-content h3 {
  font-size: 1.18rem;
  margin-bottom: 2px;
}

.timeline-subtitle {
  color: var(--accent-3);
  font-weight: 500;
  margin-bottom: 14px;
}

.timeline-bullets li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
  color: var(--text-soft);
  font-size: 0.95rem;
}

.timeline-bullets li::before {
  content: '';
  position: absolute;
  left: 2px;
  top: 9px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent-2);
}
</style>
