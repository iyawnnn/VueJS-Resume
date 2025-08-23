import { createRouter, createWebHistory } from 'vue-router'
import Resume from '../views/Resume.vue'

const routes = [{ path: '/', name: 'Resume', component: Resume }]

const router = createRouter({
  history: createWebHistory('/VueJS-Resume/'),
  routes,
})

export default router
