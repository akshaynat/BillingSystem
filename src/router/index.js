import Vue from 'vue'
import VueRouter from 'vue-router'

import homePage from '@/views/homePage.vue'
import login from '@/views/login.vue'
import register from '@/views/register.vue'
import customerDetails from '@/views/customerDetails.vue'
import product from '@/views/product.vue'
import payment from '@/views/payment.vue'
import orderDetails from '@/views/orderDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: homePage
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/custDetails',
    name: 'customerDetails',
    component: customerDetails
  },
  {
    path: '/product',
    name: 'product',
    component: product
  },
  {
    path: '/payment/:userid',
    name: 'payment',
    component: payment
  },
  {
    path: '/orderDetails/:userid',
    name: 'orderDetails',
    component: orderDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
