import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Home from '@/views/home/index.vue'
import Avatar from '@/views/avatar/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Avatar',
    component: Avatar
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
