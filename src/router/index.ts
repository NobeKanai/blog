import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/page/:page(\\d+)?',
    name: 'PostList',
    component: Home,
    alias: "/:page(\\d+)?",
  },
  {
    path: '/p/:id',
    name: 'Post',
    component: () => import('../views/Post.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
