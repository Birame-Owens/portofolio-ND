<script setup>
defineProps({
  category: { type: String, required: true },
  items: { type: String, required: true },
  index: { type: Number, default: 0 },
})
</script>

<template>
  <div class="skill-group card" v-reveal :style="{ '--reveal-delay': (index % 4) * 0.08 + 's' }">
    <div class="skill-index">{{ String(index + 1).padStart(2, '0') }}</div>
    <h4>{{ category }}</h4>
    <p>{{ items }}</p>
  </div>
</template>

<style scoped>
.skill-group {
  padding: 24px 22px;
  height: 100%;
}

.skill-index {
  font-family: var(--font-display);
  font-size: 0.8rem;
  color: var(--accent-2);
  margin-bottom: 10px;
  letter-spacing: 0.1em;
}

.skill-group h4 {
  font-size: 1.02rem;
  margin-bottom: 8px;
  color: var(--text);
}

.skill-group p {
  font-size: 0.86rem;
  color: var(--text-muted);
  margin: 0;
  line-height: 1.55;
}
</style>
