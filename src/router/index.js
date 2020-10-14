import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import News from '@/views/News.vue'
import Publications from '@/views/Publications.vue'
import OneNews from '@/views/OneNews.vue'
import OneNews2 from '@/views/OneNews2.vue'
import OneNews3 from '@/views/OneNews3.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/publications',
    name: 'Publications',
    component: Publications
  },
  {
    path: '/news/oneNews',
    name: 'OneNews',
    component: OneNews
  },
  {
    path: '/news/oneNews2',
    name: 'OneNews2',
    component: OneNews2
  },
  {
    path: '/news/oneNews3',
    name: 'OneNews3',
    component: OneNews3
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
