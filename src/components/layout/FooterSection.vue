<script setup>
const email = 'nd7915@gmail.com'
const phone = '+221 77 176 49 90'
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <span class="brand-mark">ND</span>
        <div>
          <h3>Ndeye Diop</h3>
          <p>Design • Création IA • Stratégie Commerciale &amp; Digitale</p>
        </div>
      </div>

      <div class="footer-grid">
        <div class="footer-col">
          <h4>Navigation</h4>
          <RouterLink to="/">Accueil</RouterLink>
          <RouterLink to="/designer">Design &amp; IA</RouterLink>
          <RouterLink to="/commerciale">Commerciale</RouterLink>
          <RouterLink to="/realisations">Réalisations</RouterLink>
          <RouterLink to="/parfum">Rokia Jawhar</RouterLink>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <a :href="`mailto:${email}`">{{ email }}</a>
          <a :href="`tel:${phone.replace(/\s/g, '')}`">{{ phone }}</a>
          <span class="muted">Dakar, Rufisque — Sénégal</span>
        </div>
        <div class="footer-col">
          <h4>Projet en ligne</h4>
          <a href="https://nd-world.site/" target="_blank" rel="noopener">nd-world.site ↗</a>
          <span class="muted">Application web de vente en ligne</span>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <span>© {{ new Date().getFullYear() || 2026 }} Ndeye Diop. Tous droits réservés.</span>
        <span class="made-with">Portfolio conçu avec ♡ à Dakar</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--bg-alt);
  border-top: 1px solid var(--border);
  padding-top: 70px;
  position: relative;
  overflow: hidden;
}

.footer-inner {
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
  justify-content: space-between;
  padding-bottom: 50px;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 14px;
  max-width: 320px;
}

.footer-brand .brand-mark {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: linear-gradient(150deg, var(--accent-2), var(--accent-3));
  color: #fff8ec;
  font-family: var(--font-display);
  font-weight: 600;
  flex-shrink: 0;
}

.footer-brand h3 {
  font-size: 1.15rem;
  margin-bottom: 4px;
}

.footer-brand p {
  font-size: 0.85rem;
  margin: 0;
  color: var(--text-muted);
}

.footer-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 160px;
}

.footer-col h4 {
  font-family: var(--font-body);
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--accent);
  margin-bottom: 4px;
}

.footer-col a,
.footer-col .muted {
  font-size: 0.9rem;
  color: var(--text-soft);
  transition: color var(--t-fast);
  width: fit-content;
}

.footer-col a:hover {
  color: var(--accent-3);
}

.muted {
  color: var(--text-muted) !important;
}

.footer-bottom {
  border-top: 1px solid var(--border);
  padding: 22px 0;
}

.footer-bottom-inner {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  font-size: 0.8rem;
  color: var(--text-muted);
}
</style>
