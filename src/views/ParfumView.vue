<script setup>
import SectionHeading from '../components/ui/SectionHeading.vue'
import DividerFlourish from '../components/ui/DividerFlourish.vue'
import { parfum } from '../data/parfum'
</script>

<template>
  <div class="parfum-page">
    <section class="parfum-hero">
      <div class="blob-glow" aria-hidden="true"></div>
      <div class="container parfum-hero-inner">
        <span class="status-badge" v-reveal>{{ parfum.status }}</span>
        <h1 class="wordmark" v-reveal="{ delay: 0.1 }">{{ parfum.brand }}</h1>
        <p class="tagline" v-reveal="{ delay: 0.2 }">{{ parfum.tagline }}</p>

        <div class="bottle-wrap" v-reveal="{ direction: 'scale', delay: 0.15 }">
          <svg class="bottle" viewBox="0 0 120 220" fill="none">
            <rect x="46" y="10" width="28" height="18" rx="4" fill="currentColor" opacity="0.9"/>
            <rect x="52" y="4" width="16" height="10" rx="2" fill="currentColor" opacity="0.7"/>
            <path d="M40 28h40c8 0 14 6 14 14v130c0 24-19 40-34 40s-34-16-34-40V42c0-8 6-14 14-14Z"
                  fill="currentColor" opacity="0.16" stroke="currentColor" stroke-width="1.4"/>
            <path d="M40 90h40" stroke="currentColor" stroke-width="1" opacity="0.5"/>
            <path d="M46 60h28" stroke="currentColor" stroke-width="1" opacity="0.4"/>
          </svg>
          <span class="sparkle s1">✦</span>
          <span class="sparkle s2">✧</span>
          <span class="sparkle s3">✦</span>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container narrow" v-reveal>
        <SectionHeading eyebrow="La maison" title="Une signature en préparation" :lead="parfum.description" />
      </div>
    </section>

    <section class="section alt-bg">
      <div class="container">
        <SectionHeading eyebrow="Univers olfactif" title="Familles inspirantes" center
          lead="Un aperçu des accords qui inspireront la future collection — les compositions définitives seront dévoilées au lancement." />
        <DividerFlourish />
        <div class="families-grid">
          <div v-for="(f, i) in parfum.families" :key="f.name" class="family-card card" v-reveal="'scale'" :style="{ '--reveal-delay': i * 0.12 + 's' }">
            <span class="family-icon">✦</span>
            <h3>{{ f.name }}</h3>
            <p>{{ f.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section cta-section">
      <div class="container cta-inner" v-reveal="'scale'">
        <span class="eyebrow">Restons en contact</span>
        <h2>Envie d'en savoir plus sur {{ parfum.brand }} ?</h2>
        <p>Suivez le lancement et le développement de la marque directement auprès de Ndeye.</p>
        <div class="cta-actions">
          <a :href="`mailto:${parfum.contact.email}`" class="btn btn-primary">Contacter par email</a>
          <a :href="`tel:${parfum.contact.phone.replace(/\s/g, '')}`" class="btn btn-outline">Appeler</a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.parfum-hero {
  position: relative;
  padding: 150px 0 90px;
  text-align: center;
  overflow: hidden;
}

.blob-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 20%, var(--accent-soft), transparent 60%);
  z-index: -1;
}

.status-badge {
  display: inline-block;
  padding: 7px 18px;
  border-radius: var(--radius-pill);
  background: var(--accent-soft);
  color: var(--accent-3);
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 22px;
}

.wordmark {
  font-size: clamp(2.6rem, 7vw, 4.6rem);
  letter-spacing: 0.03em;
  background: linear-gradient(100deg, var(--accent-3), var(--gold) 50%, var(--accent-3));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.tagline {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.2rem;
  color: var(--text-soft);
  max-width: 520px;
  margin: 0 auto 40px;
}

.bottle-wrap {
  position: relative;
  display: inline-block;
  color: var(--accent-3);
}

.bottle {
  width: 100px;
  height: auto;
  animation: floatSlow 5s ease-in-out infinite;
}

.sparkle {
  position: absolute;
  color: var(--gold);
  animation: floatSlow 4s ease-in-out infinite;
}
.s1 { top: 0; right: -30px; font-size: 1.3rem; }
.s2 { bottom: 30px; left: -34px; font-size: 1rem; animation-delay: 1s; }
.s3 { top: 50%; right: -46px; font-size: 0.9rem; animation-delay: 2s; }

.narrow {
  max-width: 720px;
  text-align: center;
  margin: 0 auto;
}

.alt-bg {
  background: var(--surface-alt);
}

.families-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.family-card {
  padding: 34px 26px;
  text-align: center;
}

.family-icon {
  display: inline-block;
  font-size: 1.3rem;
  color: var(--gold);
  margin-bottom: 12px;
}

.family-card h3 {
  font-size: 1.1rem;
  margin-bottom: 8px;
}

.family-card p {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin: 0;
}

.cta-section {
  text-align: center;
}

.cta-inner {
  max-width: 560px;
  margin: 0 auto;
}

.cta-actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 18px;
}

@media (max-width: 780px) {
  .families-grid {
    grid-template-columns: 1fr;
  }
}
</style>
