import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import GroupCredits from '../views/GroupCredits'
import Inspect from '../views/Inspect.vue'
import ChangeControl from '../views/ChangeControl.vue'
import About from '../views/About.vue' 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [ 
      {
        path: 'GroupCredits',
        name: 'Buscar créditos grupales',
        component: GroupCredits,
        meta: {
          publicName: 'Buscar créditos grupales'
        },
        children: [
          {
            path: 'Inspect',
            name: 'Inspeccionar',
            component: Inspect,
            meta: {
              publicName: 'Inspeccionar'
            },
            children: [
              {
                path: 'ChangeControl',
                name: 'Control de cambios',
                component: ChangeControl,
                meta: {
                  requireAuth: true,
                  publicName: 'Control de cambios'
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      publicName: 'About'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  console.log(`Navigating to: ${to.name}`);
  console.log(to)
  next();
});

export default router
