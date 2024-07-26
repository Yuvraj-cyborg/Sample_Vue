import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'
import HomeComp from '@/components/HomeComp.vue'
import FruitBox from '@/fruits/FruitBox.vue'
import FruitDetails from '@/fruits/FruitDetails.vue'
import FruitApple from '@/fruits/FruitApple.vue'
import CountingComp from '@/components/CountingComp.vue'




const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeComp
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/fruits',
    name: 'FruitBox',
    component: FruitBox,
    children: [
      {
        path: '/fruit/appleprice',
        component: FruitApple,
      }
    ]
    
  },
  {
    path: '/fruits/:id',
    name: 'FruitDetails',
    component: FruitDetails,
  },
  {
    path: '/count',
    name: 'CountingComp',
    component: CountingComp,
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
