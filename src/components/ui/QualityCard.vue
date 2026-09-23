<script setup>
defineProps({
  name: { type: String, required: true },
  description: { type: String, required: true },
  index: { type: Number, default: 0 },
})
</script>

<template>
  <div class="quality card" v-reveal="'scale'" :style="{ '--reveal-delay': index * 0.1 + 's' }">
    <span class="quality-mark">✦</span>
    <h4>{{ name }}</h4>
    <p>{{ description }}</p>
  </div>
</template>

<style scoped>
.quality {
  padding: 26px 22px;
  text-align: center;
}

.quality-mark {
  display: inline-block;
  color: var(--gold);
  font-size: 1.4rem;
  margin-bottom: 10px;
  animation: floatSlow 5s ease-in-out infinite;
}

.quality h4 {
  font-size: 1.02rem;
  margin-bottom: 6px;
}

.quality p {
  font-size: 0.86rem;
  color: var(--text-muted);
  margin: 0;
}
</style>
