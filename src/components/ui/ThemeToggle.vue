<script setup>
import { useTheme } from '../../composables/useTheme'

const { theme, toggle } = useTheme()
</script>

<template>
  <button
    class="theme-toggle"
    type="button"
    role="switch"
    :aria-checked="theme === 'dark'"
    aria-label="Changer le thème clair / sombre"
    @click="toggle"
  >
    <span class="track">
      <span class="icon icon-sun" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4.5" stroke="currentColor" stroke-width="1.6"/><path stroke="currentColor" stroke-width="1.6" stroke-linecap="round" d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
      </span>
      <span class="icon icon-moon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none"><path stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"/></svg>
      </span>
      <span class="thumb" :class="{ 'is-dark': theme === 'dark' }"></span>
    </span>
  </button>
</template>

<style scoped>
.theme-toggle {
  border: none;
  background: none;
  padding: 0;
  line-height: 0;
}

.track {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 58px;
  height: 30px;
  padding: 0 7px;
  border-radius: var(--radius-pill);
  background: var(--accent-soft);
  border: 1px solid var(--border);
  transition: background var(--t-base), border-color var(--t-base);
}

.icon {
  width: 16px;
  height: 16px;
  color: var(--accent-3);
  display: grid;
  place-items: center;
  z-index: 1;
  transition: color var(--t-base);
}

[data-theme='dark'] .icon {
  color: var(--accent-2);
}

.icon svg {
  width: 100%;
  height: 100%;
}

.thumb {
  position: absolute;
  left: 3px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(150deg, #fff6e6, var(--accent-2));
  box-shadow: var(--shadow-soft);
  transition: transform var(--t-base) , background var(--t-base);
}

.thumb.is-dark {
  transform: translateX(28px);
  background: linear-gradient(150deg, var(--accent-3), #241b14);
}
</style>
