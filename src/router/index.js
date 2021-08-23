import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import GroupCredits from '../views/GroupCredits'
import Inspect from '../views/Inspect.vue'
import ChangeControl from '../views/ChangeControl.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue' 
import Users from '../views/Users.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requireAuth: true
    },
    children: [ 
      {
        path: 'GroupCredits',
        name: 'Buscar créditos grupales',
        component: GroupCredits,
        meta: {
          requireAuth: true,
          publicName: 'Buscar créditos grupales'
        },
        children: [
          {
            path: 'Inspect',
            name: 'Inspeccionar',
            component: Inspect,
            meta: {
              requireAuth: true,
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
      requireAuth: true,
      publicName: 'About'
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Users',
    name: 'Lista de usuarios',
    component: Users,
    meta: {
      requireAuth: true,
      publicName: 'Lista de usuarios'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Not found',
    component: NotFound,
    meta: {
      requireAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth && !localStorage.getItem('token')) {
    next('/Login')
  } else {
    next()
  }
});

export default router
