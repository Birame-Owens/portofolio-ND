<script setup>
import ProfilePhoto from '../components/ui/ProfilePhoto.vue'
import ThemeToggle from '../components/ui/ThemeToggle.vue'
import TypewriterText from '../components/ui/TypewriterText.vue'
import SectionHeading from '../components/ui/SectionHeading.vue'
import DividerFlourish from '../components/ui/DividerFlourish.vue'
import StatCounter from '../components/ui/StatCounter.vue'
import { designer } from '../data/designer'
import { commerciale } from '../data/commerciale'
import { parfum } from '../data/parfum'

const words = [...designer.taglineWords, ...commerciale.taglineWords]

const stats = [
  { value: 2, suffix: '', label: 'univers professionnels' },
  { value: 10, suffix: '+', label: 'étudiants recrutés' },
  { value: 1, suffix: '', label: 'app web déployée' },
  { value: 100, suffix: '%', label: 'certifiée Référente Digitale' },
]
</script>

<template>
  <div class="home">
    <!-- HERO -->
    <section class="hero">
      <div class="hero-blob blob-a" aria-hidden="true"></div>
      <div class="hero-blob blob-b" aria-hidden="true"></div>

      <div class="container hero-inner">
        <div class="hero-text" v-reveal="'left'">
          <span class="eyebrow">Portfolio créatif &amp; commercial</span>
          <h1>
            Bonjour, je suis <span class="text-gradient">Ndeye Diop</span>
          </h1>
          <p class="hero-role">
            <TypewriterText :words="words" />
          </p>
          <p class="hero-desc">
            Designer graphique, créatrice IA et commerciale digitale à Dakar. Je transforme des
            idées en identités visuelles, contenus vidéo et stratégies qui convertissent —
            avec une exigence esthétique et un vrai sens du résultat.
          </p>
          <div class="hero-actions">
            <RouterLink to="/designer" class="btn btn-primary">Profil Design &amp; IA</RouterLink>
            <RouterLink to="/commerciale" class="btn btn-outline">Profil Commercial</RouterLink>
          </div>
          <div class="hero-tags">
            <span v-for="t in designer.tags" :key="t" class="tag-pill">{{ t }}</span>
          </div>
        </div>

        <div class="hero-visual" v-reveal="'right'">
          <ProfilePhoto :size="300" :src="designer.photo" />
          <div class="floating-chip chip-1">✦ IA Générative</div>
          <div class="floating-chip chip-2">✧ +10 recrutements</div>
          <div class="floating-chip chip-3">◈ Figma · Canva</div>
        </div>
      </div>

      <div class="hero-theme-mobile">
        <ThemeToggle />
      </div>

      <a href="#profils" class="scroll-cue" aria-label="Défiler vers le bas">
        <svg viewBox="0 0 24 24" fill="none"><path d="M12 4v15M12 19l-6-6M12 19l6-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
    </section>

    <!-- STATS -->
    <section class="stats-strip">
      <div class="container stats-grid">
        <StatCounter v-for="(s, i) in stats" :key="i" v-bind="s" />
      </div>
    </section>

    <!-- PROFILS -->
    <section id="profils" class="section">
      <div class="container">
        <SectionHeading
          eyebrow="Deux expertises, une créatrice"
          title="Choisissez l'univers à découvrir"
          lead="Ndeye évolue avec aisance entre créativité visuelle et sens commercial. Deux profils complémentaires, une même exigence."
          center
        />
        <DividerFlourish />

        <div class="profile-cards">
          <RouterLink to="/designer" class="profile-card card" v-reveal="'left'">
            <span class="profile-icon">🎨</span>
            <h3>Designer Graphique, Vidéo &amp; IA</h3>
            <p>{{ designer.profile.slice(0, 150) }}…</p>
            <span class="profile-link">Voir le profil complet →</span>
          </RouterLink>

          <RouterLink to="/commerciale" class="profile-card card" v-reveal="'right'">
            <span class="profile-icon">🤝</span>
            <h3>Commerciale &amp; Stratégie Digitale</h3>
            <p>{{ commerciale.profile.slice(0, 150) }}…</p>
            <span class="profile-link">Voir le profil complet →</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- PROJET PHARE -->
    <section class="section featured">
      <div class="container featured-inner">
        <div class="featured-text" v-reveal="'left'">
          <span class="eyebrow">Projet en ligne</span>
          <h2 class="section-title">{{ designer.featuredProject.title }}</h2>
          <p class="section-lead">{{ designer.featuredProject.subtitle }} — {{ designer.featuredProject.description }}</p>
          <a :href="designer.featuredProject.url" target="_blank" rel="noopener" class="btn btn-primary">
            Visiter le site ↗
          </a>
        </div>
        <div class="browser-mock" v-reveal="'right'">
          <div class="browser-bar">
            <span></span><span></span><span></span>
            <div class="browser-url">nd-world.site</div>
          </div>
          <div class="browser-body">
            <div class="mock-line w-70"></div>
            <div class="mock-line w-40"></div>
            <div class="mock-grid">
              <div class="mock-card"></div>
              <div class="mock-card"></div>
              <div class="mock-card"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- BRAND TEASER -->
    <section class="section brand-teaser">
      <div class="container brand-teaser-inner" v-reveal="'scale'">
        <span class="eyebrow">Nouvelle marque</span>
        <h2 class="section-title text-gradient">{{ parfum.brand }}</h2>
        <p class="section-lead">{{ parfum.tagline }}</p>
        <RouterLink to="/parfum" class="btn btn-ghost">Découvrir la marque →</RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  padding: 150px 0 90px;
  overflow: hidden;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 40px;
  align-items: center;
}

.hero-blob {
  position: absolute;
  animation: blobMove 16s ease-in-out infinite;
  will-change: transform;
  z-index: -1;
}

.blob-a {
  width: 420px;
  height: 420px;
  background: radial-gradient(circle, var(--accent-soft) 0%, transparent 70%);
  top: -120px;
  right: -80px;
}

.blob-b {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, var(--accent-2) 0%, transparent 70%);
  opacity: 0.4;
  bottom: -80px;
  left: -60px;
  animation-delay: -6s;
}

.hero h1 {
  font-size: clamp(2.4rem, 5vw, 3.6rem);
  margin-bottom: 6px;
}

.hero-role {
  font-family: var(--font-display);
  font-style: italic;
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  color: var(--accent-3);
  min-height: 1.6em;
  margin-bottom: 18px;
}

.hero-desc {
  max-width: 540px;
  font-size: 1.02rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin: 22px 0 26px;
}

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.hero-visual {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 340px;
}

.floating-chip {
  position: absolute;
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 9px 16px;
  border-radius: var(--radius-pill);
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--accent-3);
  box-shadow: var(--shadow-soft);
  animation: float 6s ease-in-out infinite;
}

.chip-1 { top: 6%; left: -4%; animation-delay: 0s; }
.chip-2 { bottom: 10%; right: -8%; animation-delay: 1.4s; }
.chip-3 { bottom: -2%; left: 6%; animation-delay: 2.4s; }

.hero-theme-mobile {
  display: none;
}

.scroll-cue {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--accent-2);
  animation: bounceArrow 2s ease-in-out infinite;
}
.scroll-cue svg {
  width: 22px;
  height: 22px;
}

.stats-strip {
  background: var(--surface-alt);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 44px 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.profile-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
}

.profile-card {
  padding: 38px 32px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.profile-icon {
  font-size: 2rem;
  margin-bottom: 6px;
}

.profile-card h3 {
  font-size: 1.25rem;
}

.profile-card p {
  color: var(--text-muted);
  font-size: 0.94rem;
}

.profile-link {
  margin-top: 10px;
  color: var(--accent-3);
  font-weight: 500;
  font-size: 0.92rem;
  transition: gap var(--t-fast);
}

.featured-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}

.browser-mock {
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-strong);
  background: var(--surface);
}

.browser-bar {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 12px 16px;
  background: var(--bg-alt);
  border-bottom: 1px solid var(--border);
}

.browser-bar span {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--border);
}

.browser-url {
  margin-left: 12px;
  font-size: 0.78rem;
  color: var(--text-muted);
  background: var(--surface);
  padding: 3px 12px;
  border-radius: var(--radius-pill);
}

.browser-body {
  padding: 26px;
}

.mock-line {
  height: 12px;
  border-radius: 6px;
  background: var(--accent-soft);
  margin-bottom: 12px;
}
.w-70 { width: 70%; }
.w-40 { width: 40%; }

.mock-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 20px;
}

.mock-card {
  height: 60px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--accent-2), var(--accent-soft));
  opacity: 0.7;
}

.brand-teaser-inner {
  text-align: center;
  max-width: 620px;
  margin: 0 auto;
  padding: 60px 40px;
  border-radius: var(--radius-lg);
  background: linear-gradient(160deg, var(--surface-alt), var(--surface));
  border: 1px solid var(--border);
}

.brand-teaser-inner .section-title {
  margin-left: auto;
  margin-right: auto;
}

.brand-teaser-inner .section-lead {
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 900px) {
  .hero-inner,
  .featured-inner {
    grid-template-columns: 1fr;
  }
  .hero-visual {
    order: -1;
  }
  .profile-cards {
    grid-template-columns: 1fr;
  }
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 30px;
  }
}
</style>
