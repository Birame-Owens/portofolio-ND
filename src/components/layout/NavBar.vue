<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import ThemeToggle from '../ui/ThemeToggle.vue'

const scrolled = ref(false)
const menuOpen = ref(false)
const route = useRoute()

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/designer', label: 'Design & IA' },
  { to: '/commerciale', label: 'Commerciale' },
  { to: '/parfum', label: 'Rokia Jawhar' },
]

function onScroll() {
  scrolled.value = window.scrollY > 24
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

watch(
  () => route.fullPath,
  () => (menuOpen.value = false)
)
</script>

<template>
  <header class="navbar" :class="{ scrolled }">
    <div class="container navbar-inner">
      <RouterLink to="/" class="brand">
        <span class="brand-mark">ND</span>
        <span class="brand-name">Ndeye&nbsp;Diop</span>
      </RouterLink>

      <nav class="nav-links" :class="{ open: menuOpen }">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="nav-link"
          active-class="active"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <div class="navbar-actions">
        <ThemeToggle />
        <button
          class="burger"
          :class="{ open: menuOpen }"
          aria-label="Ouvrir le menu"
          @click="menuOpen = !menuOpen"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid transparent;
  transition: border-color var(--t-base), box-shadow var(--t-base);
}

/* Le flou vit sur un pseudo-élément : si .navbar portait elle-même
   backdrop-filter, elle deviendrait le containing block de .nav-links
   (position: fixed) et le menu mobile ne couvrirait plus l'écran. */
.navbar::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background: rgba(251, 247, 241, 0.7);
  backdrop-filter: blur(14px) saturate(140%);
  -webkit-backdrop-filter: blur(14px) saturate(140%);
  transition: background var(--t-base);
}

[data-theme='dark'] .navbar::before {
  background: rgba(27, 20, 15, 0.7);
}

.navbar.scrolled {
  border-color: var(--border);
  box-shadow: 0 8px 24px -18px rgba(59, 42, 30, 0.4);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  padding-bottom: 16px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.brand-mark {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: linear-gradient(150deg, var(--accent-2), var(--accent-3));
  color: #fff8ec;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.9rem;
}

.brand-name {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.05rem;
  color: var(--text);
}

.nav-links {
  display: flex;
  gap: 8px;
}

.nav-link {
  position: relative;
  padding: 8px 14px;
  font-size: 0.92rem;
  color: var(--text-soft);
  border-radius: var(--radius-pill);
  transition: color var(--t-fast);
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: 3px;
  height: 1.5px;
  background: var(--accent-2);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--t-fast);
}

.nav-link:hover {
  color: var(--accent-3);
}

.nav-link:hover::after {
  transform: scaleX(1);
}

.nav-link.active {
  color: var(--accent-3);
  font-weight: 500;
}

.nav-link.active::after {
  transform: scaleX(1);
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 14px;
}

.burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 34px;
  height: 34px;
  border: none;
  background: transparent;
}

.burger span {
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: transform var(--t-fast), opacity var(--t-fast);
}

.burger.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.burger.open span:nth-child(2) {
  opacity: 0;
}
.burger.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 860px) {
  .burger {
    display: flex;
  }

  .nav-links {
    position: fixed;
    inset: 68px 0 0 0;
    flex-direction: column;
    background: var(--bg);
    padding: 28px 24px;
    gap: 6px;
    transform: translateX(100%);
    transition: transform var(--t-base);
    border-top: 1px solid var(--border);
  }

  .nav-links.open {
    transform: translateX(0);
  }

  .nav-link {
    padding: 14px 16px;
    font-size: 1.05rem;
    border-bottom: 1px solid var(--border);
    border-radius: 0;
  }
}
</style>
