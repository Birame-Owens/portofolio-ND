<script setup>
import { onMounted, onUnmounted } from 'vue'

const props = defineProps({
  item: { type: Object, default: null },
  index: { type: Number, default: 0 },
  total: { type: Number, default: 0 },
})

const emit = defineEmits(['close', 'prev', 'next'])

function onKeydown(e) {
  if (!props.item) return
  if (e.key === 'Escape') emit('close')
  if (e.key === 'ArrowLeft') emit('prev')
  if (e.key === 'ArrowRight') emit('next')
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <Teleport to="body">
    <Transition name="lb-fade">
      <div v-if="item" class="lb-overlay" @click.self="$emit('close')">
        <div class="lb-box">
          <div class="lb-bar">
            <span class="lb-count">{{ index + 1 }} / {{ total }}</span>
            <button class="lb-icon" aria-label="Fermer" @click="$emit('close')">
              <svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </button>
          </div>

          <div class="lb-stage">
            <button v-if="total > 1" class="lb-icon lb-nav prev" aria-label="Précédent" @click="$emit('prev')">
              <svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <img :src="item.image" :alt="item.title" />
            <button v-if="total > 1" class="lb-icon lb-nav next" aria-label="Suivant" @click="$emit('next')">
              <svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
          </div>

          <div class="lb-caption">
            <h3>{{ item.title }}</h3>
            <p v-if="item.tools" class="lb-tools">{{ item.tools }}</p>
            <p v-if="item.description">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.lb-overlay {
  position: fixed;
  inset: 0;
  z-index: 300;
  background: var(--overlay);
  display: grid;
  place-items: center;
  padding: 24px;
}

.lb-box {
  width: min(1000px, 100%);
  max-height: 90vh;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-strong);
}

.lb-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  border-bottom: 1px solid var(--border);
}

.lb-count {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.lb-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  display: grid;
  place-items: center;
  transition: border-color var(--t-fast), transform var(--t-fast);
}

.lb-icon:hover {
  border-color: var(--accent-2);
  transform: translateY(-2px);
}

.lb-icon svg {
  width: 18px;
  height: 18px;
}

.lb-stage {
  position: relative;
  flex: 1 1 auto;
  min-height: 0;
  background: var(--surface-alt);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow: auto;
}

.lb-stage img {
  max-width: 100%;
  max-height: 58vh;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 10px;
}

.lb-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.lb-nav.prev {
  left: 14px;
}
.lb-nav.next {
  right: 14px;
}

.lb-caption {
  padding: 18px 22px 22px;
  border-top: 1px solid var(--border);
}

.lb-caption h3 {
  font-size: 1.1rem;
  margin-bottom: 4px;
}

.lb-tools {
  color: var(--accent-3);
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 6px;
}

.lb-caption p:last-child {
  margin-bottom: 0;
}

.lb-fade-enter-active,
.lb-fade-leave-active {
  transition: opacity 0.25s ease;
}
.lb-fade-enter-from,
.lb-fade-leave-to {
  opacity: 0;
}

@media (max-width: 600px) {
  .lb-overlay {
    padding: 0;
  }
  .lb-box {
    max-height: 100vh;
    height: 100%;
    border-radius: 0;
  }
}
</style>
