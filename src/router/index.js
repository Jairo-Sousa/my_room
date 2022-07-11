import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'

const routes = [
  {
    path: '/main',
    name: 'main',
    component: MainView,
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
      },
      {
        path: '/courses',
        name: 'courses',
        component: () => import(/* webpackChunkName: "courses" */ '../views/CoursesView.vue')
      },
      {
        path: '/rooms',
        name: 'rooms',
        component: () => import(/* webpackChunkName: "rooms" */ '../views/RoomsView.vue')
      },
      {
        path: '/subs',
        name: 'subs',
        component: () => import(/* webpackChunkName: "subs" */ '../views/SubsView.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  }

]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router