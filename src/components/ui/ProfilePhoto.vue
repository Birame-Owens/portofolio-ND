<script setup>
defineProps({
  src: { type: String, default: null },
  initials: { type: String, default: 'ND' },
  size: { type: Number, default: 280 },
})
</script>

<template>
  <div class="photo-frame" :style="{ '--size': size + 'px' }">
    <div class="ring ring-1"></div>
    <div class="ring ring-2"></div>
    <div class="photo-inner">
      <img v-if="src" :src="src" alt="Photo de profil de Ndeye Diop" />
      <span v-else class="monogram">{{ initials }}</span>
    </div>
    <span class="sparkle sparkle-a">✦</span>
    <span class="sparkle sparkle-b">✧</span>
  </div>
</template>

<style scoped>
.photo-frame {
  position: relative;
  width: var(--size);
  height: var(--size);
  display: grid;
  place-items: center;
  flex-shrink: 0;
}

.ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1.5px dashed var(--accent-2);
  opacity: 0.55;
}

.ring-1 {
  animation: spinSlow 40s linear infinite;
}

.ring-2 {
  inset: -16px;
  border-style: solid;
  border-width: 1px;
  opacity: 0.3;
  animation: spinSlow 60s linear infinite reverse;
}

.photo-inner {
  position: relative;
  width: 86%;
  height: 86%;
  border-radius: 50%;
  overflow: hidden;
  background: linear-gradient(150deg, var(--accent-2), var(--accent-3));
  display: grid;
  place-items: center;
  box-shadow: var(--shadow-strong);
  border: 4px solid var(--surface);
  animation: float 7s ease-in-out infinite;
}

.photo-inner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 18%;
}

.monogram {
  font-family: var(--font-display);
  font-size: calc(var(--size) * 0.24);
  color: #fff8ec;
  letter-spacing: 0.05em;
}

.sparkle {
  position: absolute;
  color: var(--gold);
  font-size: 1.4rem;
  animation: floatSlow 4s ease-in-out infinite;
}

.sparkle-a {
  top: 6%;
  right: -2%;
}

.sparkle-b {
  bottom: 10%;
  left: -6%;
  animation-delay: 1.2s;
  font-size: 1.1rem;
}
</style>
