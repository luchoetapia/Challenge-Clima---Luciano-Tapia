import { createRouter, createWebHistory } from 'vue-router'
import HomeItem from "../views/HomeItem.vue"
import CityView from "../views/CityView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeItem
    },
    {
      path: '/about',
      name: 'about',

    },
    {
      path: '/city/:id',
      name: 'city',
      component: CityView
    }

  ]
})

export default router
