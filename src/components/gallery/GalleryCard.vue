<script setup>
defineProps({
  title: { type: String, required: true },
  image: { type: String, required: true },
  categoryLabel: { type: String, default: '' },
  index: { type: Number, default: 0 },
})
defineEmits(['open'])
</script>

<template>
  <button
    class="gallery-card"
    v-reveal="'scale'"
    :style="{ '--reveal-delay': (index % 6) * 0.06 + 's' }"
    @click="$emit('open')"
  >
    <span class="thumb">
      <img :src="image" :alt="title" loading="lazy" />
    </span>
    <span class="meta">
      <span class="title">{{ title }}</span>
      <span v-if="categoryLabel" class="cat">{{ categoryLabel }}</span>
    </span>
  </button>
</template>

<style scoped>
.gallery-card {
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  background: none;
  font: inherit;
  text-align: left;
  cursor: pointer;
  color: inherit;
}

.thumb {
  display: block;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--surface);
  aspect-ratio: 4 / 5;
  transition: border-color var(--t-base), box-shadow var(--t-base);
}

.gallery-card:hover .thumb,
.gallery-card:focus-visible .thumb {
  border-color: var(--accent-2);
  box-shadow: var(--shadow-strong);
}

.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--t-slow);
}

.gallery-card:hover .thumb img {
  transform: scale(1.05);
}

.meta {
  display: block;
  padding: 12px 2px 0;
}

.title {
  display: block;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1rem;
}

.cat {
  display: block;
  margin-top: 2px;
  font-size: 0.82rem;
  color: var(--accent);
}
</style>
