import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { auth } from '../firebase'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },

    {
      path: '/academy-resources',
      name: 'academy-resources',
      component: () => import('../views/Academy/Resources.vue'),
       meta: { requiresAuth: true },
    },

    {
      path: '/academy-billing',
      name: 'academy-billing',
      component: () => import('../views/Academy/Billing.vue')
    },

    {
      path: '/change-plan',
      name: 'change-plan',
      component: () => import('../views/Academy/ChangePlan.vue')
    },

    {
      path: '/session-details',
      name: 'details',
      component: () => import('../views/Academy/SessionDetails.vue'),
       meta: { requiresAuth: true },
    },

    {
      path: '/task-details',
      name: 'task',
      component: () => import('../views/Academy/TaskDetails.vue'),
       meta: { requiresAuth: true },
    },

    {
      path: '/forum',
      name: 'forum',
      component: () => import('../views/Forum/index.vue'),
       meta: { requiresAuth: true },
    },

    


    // AUTHENTICATION ROUTES

    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Auth/Login.vue')
    },

    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Auth/Register.vue')
    },

    {
      path: '/unverified',
      name: 'unverified',
      component: () => import('../views/Auth/UnverifiedEmail.vue')
    },

    {
      path: '/verify-email',
      name: 'verify',
      component: () => import('../views/Auth/VerifyEmail.vue')
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
          next({path: '/unverified'});
        }
      } else {
        // User is not authenticated, redirect to login
        next({path: "/login"});
      }
    });
  } else {
    // Route doesn't require authentication, proceed with navigation
    next();
  }
});

export default router
