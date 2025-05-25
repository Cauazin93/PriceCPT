import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LandingPageView from '../views/LandingPageView.vue'
import LoginView from '../views/LoginView.vue'
import CreateAccountView from '../views/CreateAccountView.vue'
import ProductView from '../views/ProductView.vue'
import ComoUsarView from '../views/ComoUsarView.vue'
import DashboardView from '../views/DashboardView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
     {
      path: '/landing',
      name: 'landing',
      component: LandingPageView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/createAccount',
      name: 'createAccount',
      component: CreateAccountView,
    },
   
    {
      path: '/product',
      name: 'product',
      component: ProductView,
    },
     {
      path: '/comoUsar',
      name: 'comoUsar',
      component: ComoUsarView,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
    },
  ],
})

export default router
