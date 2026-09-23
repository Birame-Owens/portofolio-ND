<script setup>
import ProfilePhoto from '../ui/ProfilePhoto.vue'
import SectionHeading from '../ui/SectionHeading.vue'
import DividerFlourish from '../ui/DividerFlourish.vue'
import TimelineCard from '../ui/TimelineCard.vue'
import ProjectCard from '../ui/ProjectCard.vue'
import SkillGroup from '../ui/SkillGroup.vue'
import QualityCard from '../ui/QualityCard.vue'
import LanguageBar from '../ui/LanguageBar.vue'

defineProps({
  data: { type: Object, required: true },
  icon: { type: String, default: '✦' },
})
</script>

<template>
  <div class="profile-page">
    <!-- HEADER -->
    <section class="profile-hero">
      <div class="hero-blob" aria-hidden="true"></div>
      <div class="container profile-hero-inner">
        <div class="profile-photo-col" v-reveal="'left'">
          <ProfilePhoto :size="220" :src="data.photo" />
        </div>
        <div class="profile-info-col" v-reveal="'right'">
          <span class="eyebrow">{{ icon }} {{ data.roleFull }}</span>
          <h1>{{ data.name }}</h1>
          <div class="tag-row">
            <span v-for="t in data.tags" :key="t" class="tag-pill">{{ t }}</span>
          </div>
          <div class="contact-row">
            <a :href="`mailto:${data.email}`" class="contact-item">✉ {{ data.email }}</a>
            <a :href="`tel:${data.phone.replace(/\s/g, '')}`" class="contact-item">☎ {{ data.phone }}</a>
            <span class="contact-item">📍 {{ data.location }}</span>
            <a v-if="data.websiteUrl" :href="data.websiteUrl" target="_blank" rel="noopener" class="contact-item">🔗 {{ data.website }}</a>
          </div>
          <span class="availability">● Disponibilité : {{ data.availability }}</span>
        </div>
      </div>
    </section>

    <!-- PROFIL -->
    <section class="section">
      <div class="container narrow" v-reveal>
        <span class="eyebrow">Profil</span>
        <p class="profile-text">{{ data.profile }}</p>
      </div>
    </section>

    <!-- PROJET PHARE (design uniquement) -->
    <section v-if="data.featuredProject" class="section featured-strip">
      <div class="container featured-strip-inner" v-reveal="'scale'">
        <div>
          <span class="eyebrow">Projet en ligne</span>
          <h3>{{ data.featuredProject.title }} — {{ data.featuredProject.subtitle }}</h3>
          <p>{{ data.featuredProject.description }}</p>
        </div>
        <a :href="data.featuredProject.url" target="_blank" rel="noopener" class="btn btn-primary">
          Visiter ↗
        </a>
      </div>
    </section>

    <!-- EXPERIENCE -->
    <section class="section">
      <div class="container">
        <SectionHeading eyebrow="Parcours" title="Expérience" />
        <DividerFlourish />
        <div class="timeline">
          <TimelineCard
            v-for="(exp, i) in data.experience"
            :key="i"
            :title="exp.title"
            :subtitle="exp.company"
            :date="exp.date"
            :bullets="exp.bullets"
            :index="i"
          />
        </div>
      </div>
    </section>

    <!-- PROJETS -->
    <section class="section alt-bg">
      <div class="container">
        <SectionHeading eyebrow="Réalisations" title="Projets clés" />
        <DividerFlourish />
        <div class="project-grid">
          <ProjectCard
            v-for="(p, i) in data.projects"
            :key="i"
            :title="p.title"
            :tools="p.tools"
            :bullets="p.bullets"
            :highlight="p.highlight"
            :index="i"
          />
        </div>
      </div>
    </section>

    <!-- COMPETENCES -->
    <section class="section">
      <div class="container">
        <SectionHeading eyebrow="Savoir-faire" title="Compétences" />
        <DividerFlourish />
        <div class="skills-grid">
          <SkillGroup
            v-for="(s, i) in data.skills"
            :key="i"
            :category="s.category"
            :items="s.items"
            :index="i"
          />
        </div>
      </div>
    </section>

    <!-- FORMATION + LANGUES -->
    <section class="section alt-bg">
      <div class="container two-col">
        <div v-reveal="'left'">
          <SectionHeading eyebrow="Parcours académique" title="Formation" />
          <div class="timeline compact">
            <TimelineCard
              v-for="(ed, i) in data.education"
              :key="i"
              :title="ed.title"
              :subtitle="ed.place"
              :date="ed.date"
              :bullets="ed.details ? [ed.details] : []"
              :index="i"
            />
          </div>
        </div>
        <div v-reveal="'right'">
          <SectionHeading eyebrow="Langues" title="Communication" />
          <div class="languages-box card">
            <LanguageBar
              v-for="(l, i) in data.languages"
              :key="i"
              :name="l.name"
              :level="l.level"
              :percent="l.percent"
              :index="i"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- QUALITES -->
    <section class="section">
      <div class="container">
        <SectionHeading eyebrow="Savoir-être" title="Qualités" center />
        <DividerFlourish />
        <div class="qualities-grid">
          <QualityCard
            v-for="(q, i) in data.qualities"
            :key="i"
            :name="q.name"
            :description="q.description"
            :index="i"
          />
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section cta-section">
      <div class="container cta-inner" v-reveal="'scale'">
        <h2>Envie de collaborer avec {{ data.name.split(' ')[0] }} ?</h2>
        <p>Disponible pour de nouvelles opportunités — {{ data.availability.toLowerCase() }}.</p>
        <div class="cta-actions">
          <a :href="`mailto:${data.email}`" class="btn btn-primary">Envoyer un email</a>
          <a :href="`tel:${data.phone.replace(/\s/g, '')}`" class="btn btn-outline">Appeler</a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.profile-hero {
  position: relative;
  padding: 130px 0 70px;
  overflow: hidden;
}

.hero-blob {
  position: absolute;
  width: 380px;
  height: 380px;
  background: radial-gradient(circle, var(--accent-soft) 0%, transparent 70%);
  top: -140px;
  right: -100px;
  animation: blobMove 18s ease-in-out infinite;
  will-change: transform;
  z-index: -1;
}

.profile-hero-inner {
  display: flex;
  align-items: center;
  gap: 48px;
}

.profile-info-col h1 {
  font-size: clamp(2rem, 4vw, 2.8rem);
  margin: 4px 0 14px;
}

.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;
}

.contact-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 14px;
}

.contact-item {
  font-size: 0.9rem;
  color: var(--text-soft);
  transition: color var(--t-fast);
}

.contact-item:hover {
  color: var(--accent-3);
}

.availability {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.82rem;
  color: var(--accent-3);
  font-weight: 500;
}

.availability::before {
  color: #6fae7c;
}

.narrow {
  max-width: 780px;
}

.profile-text {
  font-size: 1.08rem;
  line-height: 1.8;
}

.featured-strip-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  background: linear-gradient(150deg, var(--surface-alt), var(--surface));
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 36px 40px;
}

.featured-strip-inner h3 {
  font-size: 1.2rem;
  margin: 6px 0 8px;
}

.featured-strip-inner p {
  max-width: 480px;
  margin: 0;
}

.alt-bg {
  background: var(--surface-alt);
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-width: 800px;
}

.timeline.compact {
  max-width: 100%;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 20px;
}

.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: start;
}

.languages-box {
  padding: 30px 28px;
}

.qualities-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
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

@media (max-width: 900px) {
  .profile-hero-inner {
    flex-direction: column;
    text-align: center;
  }
  .tag-row,
  .contact-row {
    justify-content: center;
  }
  .project-grid,
  .two-col {
    grid-template-columns: 1fr;
  }
  .qualities-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
