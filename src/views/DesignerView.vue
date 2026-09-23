<script setup>
import ProfileLayout from '../components/profile/ProfileLayout.vue'
import { designer } from '../data/designer'
</script>

<template>
  <ProfileLayout :data="designer" icon="🎨" />
</template>
