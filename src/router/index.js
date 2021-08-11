import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Deals from '../views/Deals.vue'
import Login from '../views/Login.vue'
import Cod from '../views/Cod.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bayar-di-tempat',
    name: 'Cod',
    component: Cod
  },
  {
    path: '/Deals',
    name: 'Deals',
    component: Deals
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
