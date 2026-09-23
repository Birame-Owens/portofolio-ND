<script setup>
import ProfileLayout from '../components/profile/ProfileLayout.vue'
import { commerciale } from '../data/commerciale'
</script>

<template>
  <ProfileLayout :data="commerciale" icon="🤝" />
</template>
