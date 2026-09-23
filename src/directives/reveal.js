// Directive v-reveal : anime l'apparition d'un élément lors du scroll.
// Usage: v-reveal | v-reveal="'left'" | v-reveal="{ direction: 'scale', delay: 0.15 }"

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
)

function apply(el, binding) {
  const value = binding.value
  const direction = typeof value === 'string' ? value : value?.direction
  const delay = typeof value === 'object' ? value?.delay : undefined

  el.setAttribute('data-reveal', direction || 'up')
  if (delay) el.style.setProperty('--reveal-delay', `${delay}s`)

  observer.observe(el)
}

export default {
  mounted: apply,
}
