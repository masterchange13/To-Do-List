import { createRouter, createWebHistory } from 'vue-router'

const route = [
  {
    Path: '/',
    name: name,
    component: ()=> import('../components/home/HomeVue.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: route
})

export default router