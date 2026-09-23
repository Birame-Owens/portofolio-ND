<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  words: { type: Array, required: true },
  typeSpeed: { type: Number, default: 70 },
  deleteSpeed: { type: Number, default: 40 },
  pause: { type: Number, default: 1600 },
})

const display = ref('')
let wordIndex = 0
let charIndex = 0
let deleting = false
let timer = null

function tick() {
  const word = props.words[wordIndex]

  if (!deleting) {
    charIndex++
    display.value = word.slice(0, charIndex)
    if (charIndex === word.length) {
      deleting = true
      timer = setTimeout(tick, props.pause)
      return
    }
    timer = setTimeout(tick, props.typeSpeed)
  } else {
    charIndex--
    display.value = word.slice(0, charIndex)
    if (charIndex === 0) {
      deleting = false
      wordIndex = (wordIndex + 1) % props.words.length
    }
    timer = setTimeout(tick, props.deleteSpeed)
  }
}

onMounted(() => {
  timer = setTimeout(tick, 500)
})

onUnmounted(() => clearTimeout(timer))
</script>

<template>
  <span class="typewriter">{{ display }}<span class="caret" aria-hidden="true"></span></span>
</template>

<style scoped>
.typewriter {
  display: inline-block;
  min-height: 1.2em;
}
.caret {
  display: inline-block;
  width: 2px;
  height: 0.9em;
  background: var(--accent);
  margin-left: 4px;
  vertical-align: -0.1em;
  animation: caretBlink 0.9s steps(1) infinite;
}
@keyframes caretBlink {
  50% { opacity: 0; }
}
</style>
