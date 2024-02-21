import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { auth } from '../firebase'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },

    {
      path: '/academy-resources',
      name: 'academy-resources',
      component: () => import('../views/Academy/Resources.vue')
    },

    {
      path: '/academy-billing',
      name: 'academy-billing',
      component: () => import('../views/Academy/Billing.vue')
    },

    {
      path: '/session-details',
      name: 'details',
      component: () => import('../views/Academy/SessionDetails.vue')
    },


    // AUTHENTICATION ROUTES

    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Auth/Login.vue')
    },

  ]
})


router.beforeEach((to, from, next) => {
  // Check if the route requires authentication
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Wait for the user's authentication status to be rehydrated
    auth.onAuthStateChanged(user => {
      if (user) {
        // Check if the user's email is verified
        if (user.emailVerified) {
          // User is authenticated and email is verified, proceed with navigation
          next();

        } else {
          // User is authenticated but email is not verified, redirect to a verification page
          next();
        }
      } else {
        // User is not authenticated, redirect to login
        next();
      }
    });
  } else {
    // Route doesn't require authentication, proceed with navigation
    next();
  }
});

export default router