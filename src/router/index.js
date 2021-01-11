import Vue from 'vue'
import { List } from 'vant';
import VueRouter from 'vue-router'
import routerTest from '../views/routerTest.vue'
import recruitAd from '../views/recruitAd.vue'
Vue.use(VueRouter)
Vue.use(List);
const routes = [
  {
    path: '/',
    name: 'routerTest',
    component: routerTest
  },
  {
    path: '/recruitAd',
    name: 'recruitAd',
    component: recruitAd
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: 'about' */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
