import { createRouter, createWebHashHistory } from 'vue-router'
import Start from '@/views/Start'
import Goal from '@/views/Goal'
import Room from '@/views/Room'

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/goal',
    name: 'Goal',
    component: Goal
  },
  {
    path: '/room/:id',
    name: 'Room',
    component: Room,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
