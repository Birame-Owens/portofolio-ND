<script setup>
import { ref, computed } from 'vue'
import SectionHeading from '../components/ui/SectionHeading.vue'
import GalleryCard from '../components/gallery/GalleryCard.vue'
import GalleryLightbox from '../components/gallery/GalleryLightbox.vue'
import { categories, realisations } from '../data/realisations'

const activeCategory = ref('all')
const lightboxIndex = ref(null)

const filtered = computed(() =>
  activeCategory.value === 'all'
    ? realisations
    : realisations.filter((r) => r.category === activeCategory.value)
)

const activeItem = computed(() =>
  lightboxIndex.value === null ? null : filtered.value[lightboxIndex.value]
)

function categoryLabel(key) {
  return categories.find((c) => c.key === key)?.label || key
}

function openAt(i) {
  lightboxIndex.value = i
}
function close() {
  lightboxIndex.value = null
}
function prev() {
  if (lightboxIndex.value === null) return
  lightboxIndex.value = (lightboxIndex.value - 1 + filtered.value.length) % filtered.value.length
}
function next() {
  if (lightboxIndex.value === null) return
  lightboxIndex.value = (lightboxIndex.value + 1) % filtered.value.length
}
</script>

<template>
  <div class="realisations-page">
    <section class="page-hero">
      <div class="blob" aria-hidden="true"></div>
      <div class="container" v-reveal>
        <span class="eyebrow">Portfolio visuel</span>
        <h1>Réalisations</h1>
        <p class="lead">
          Un aperçu concret du travail de Ndeye : identités visuelles, affiches, documents,
          vidéos et publications. Cette galerie s'enrichit au fil des projets.
        </p>
      </div>
    </section>

    <section class="section gallery-section">
      <div class="container">
        <div class="filters" role="group" aria-label="Filtrer par catégorie" v-reveal>
          <button
            type="button"
            :aria-pressed="activeCategory === 'all'"
            :class="{ active: activeCategory === 'all' }"
            @click="activeCategory = 'all'"
          >
            Tout
          </button>
          <button
            v-for="c in categories"
            :key="c.key"
            type="button"
            :aria-pressed="activeCategory === c.key"
            :class="{ active: activeCategory === c.key }"
            @click="activeCategory = c.key"
          >
            {{ c.label }}
          </button>
        </div>

        <div v-if="filtered.length" class="gallery-grid">
          <GalleryCard
            v-for="(item, i) in filtered"
            :key="item.id"
            :title="item.title"
            :image="item.image"
            :category-label="categoryLabel(item.category)"
            :index="i"
            @open="openAt(i)"
          />
        </div>

        <div v-else class="empty-state" v-reveal="'scale'">
          <span class="empty-icon">✦</span>
          <h2>Galerie en préparation</h2>
          <p>
            Les réalisations de Ndeye seront ajoutées ici très prochainement — identités
            visuelles, affiches, montages vidéo et publications. Revenez bientôt !
          </p>
        </div>
      </div>
    </section>

    <GalleryLightbox
      :item="activeItem"
      :index="lightboxIndex || 0"
      :total="filtered.length"
      @close="close"
      @prev="prev"
      @next="next"
    />
  </div>
</template>

<style scoped>
.page-hero {
  position: relative;
  padding: 140px 0 60px;
  overflow: hidden;
}

.blob {
  position: absolute;
  width: 380px;
  height: 380px;
  background: radial-gradient(circle, var(--accent-soft) 0%, transparent 70%);
  top: -140px;
  left: -100px;
  animation: blobMove 18s ease-in-out infinite;
  will-change: transform;
  z-index: -1;
}

.page-hero h1 {
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  margin: 6px 0 16px;
}

.lead {
  max-width: 620px;
  font-size: 1.05rem;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 40px;
}

.filters button {
  font: inherit;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: var(--radius-pill);
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text);
  transition: border-color var(--t-fast), background var(--t-fast), color var(--t-fast);
}

.filters button:hover {
  border-color: var(--accent-2);
}

.filters button.active {
  background: var(--accent-3);
  border-color: var(--accent-3);
  color: #fff8ec;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 26px;
}

.empty-state {
  text-align: center;
  max-width: 480px;
  margin: 40px auto;
  padding: 60px 40px;
  border-radius: var(--radius-lg);
  background: var(--surface-alt);
  border: 1px dashed var(--border);
}

.empty-icon {
  display: inline-block;
  font-size: 1.6rem;
  color: var(--gold);
  margin-bottom: 14px;
  animation: floatSlow 5s ease-in-out infinite;
}

.empty-state h2 {
  font-size: 1.3rem;
  margin-bottom: 10px;
}

.empty-state p {
  margin: 0;
}
</style>
