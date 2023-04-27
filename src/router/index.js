import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'
import Login from '../views/Login.vue'
import Forgot from '../views/Forgot.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path:'/login',
      name:'login',
      component: Login,
    },
    {
      path:'/forgot',
      name:'forgot',
      component: Forgot,
    }
  ]
})

export default router
