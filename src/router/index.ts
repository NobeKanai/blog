import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import PostListCate from '../views/PostListCate.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/page/:page(\\d+)?',
    name: 'PostList',
    component: Home,
    alias: "/:page(\\d+)?",
  },
  {
    path: '/category/:category(\\d+)/page/:page(\\d+)',
    name: 'PostListByCategory',
    component: PostListCate,
  },
  {
    path: '/p/:id',
    name: 'Post',
    component: () => import('../views/Post.vue')
  },
  {
    path: '/friends',
    name: 'Friends',
    component: () => import('../views/FriendLinks.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
