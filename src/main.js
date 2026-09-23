import { createApp } from 'vue'
import './assets/styles/base.css'
import App from './App.vue'
import router from './router'
import reveal from './directives/reveal'

const app = createApp(App)
app.directive('reveal', reveal)
app.use(router)
app.mount('#app')
