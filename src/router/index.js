import { createRouter, createWebHistory } from 'vue-router'
import IntroView from '../views/IntroView.vue'
import LoginView from '../views/auth/LoginView.vue'
import RegisterView from '../views/auth/RegisterView.vue'

const routes = [
  {
    path: '/',
    name: 'intro',
    component: IntroView
  },

  // Home routes
  {
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },

  // Login routes
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },

  // Register routes
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
