<script setup>
import NavBar from './components/layout/NavBar.vue'
import FooterSection from './components/layout/FooterSection.vue'
import ScrollProgress from './components/layout/ScrollProgress.vue'
import BackToTop from './components/layout/BackToTop.vue'
</script>

<template>
  <ScrollProgress />
  <NavBar />
  <main>
    <RouterView v-slot="{ Component, route }">
      <Transition name="page" mode="out-in">
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
  </main>
  <FooterSection />
  <BackToTop />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(16px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
