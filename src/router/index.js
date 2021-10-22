import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/packages',
    },
    {
      path: '',
      component: () => import('@/layouts/Main'),
      children: [
        {
          path: '/packages',
          component: () => import('@/modules/packages/views/Packages'),
        },
      ],
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
})

export default router
