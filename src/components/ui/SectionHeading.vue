<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  lead: { type: String, default: '' },
  center: { type: Boolean, default: false },
})
</script>

<template>
  <div class="heading" :class="{ center }" v-reveal>
    <span v-if="eyebrow" class="eyebrow">{{ eyebrow }}</span>
    <h2 class="section-title">{{ title }}</h2>
    <p v-if="lead" class="section-lead">{{ lead }}</p>
  </div>
</template>

<style scoped>
.heading.center {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
.heading.center .section-lead {
  margin-left: auto;
  margin-right: auto;
}
</style>
