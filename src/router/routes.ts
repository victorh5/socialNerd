import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'inicial',
    component: () => import('@/pages/HomePage.vue')
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: () => import('@/pages/SignUpPage.vue')
  }
]

export { routes }