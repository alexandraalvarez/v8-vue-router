import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    alias:['/inicio', '/portada', '/home'],
    component: Home
  },
  {
    path: '/sobremi',
    name: 'Sobremi',
    alias:['/acerca'],
    component: () => import('../views/Sobremi.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    alias:['/contactame'],
    component: () => import('../views/Contacto.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue')
  },
  {
    path: '/post/1',
    name: 'Articulo',
    component: () => import('../views/Post.vue')
  },
  { 
    path: '/administrador/simple', 
    name: 'simple',
    component: () => import('../views/Simple.vue'), 
  },
  { 
    path: '/administrador/avanzado',
    name: 'avanzado', 
    component: () => import('../views/Avanzado.vue'), 
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
