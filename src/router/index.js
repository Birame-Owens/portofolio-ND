import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/designer',
    name: 'designer',
    component: () => import('../views/DesignerView.vue'),
  },
  {
    path: '/commerciale',
    name: 'commerciale',
    component: () => import('../views/CommercialeView.vue'),
  },
  {
    path: '/parfum',
    name: 'parfum',
    component: () => import('../views/ParfumView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth', top: 100 }
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
