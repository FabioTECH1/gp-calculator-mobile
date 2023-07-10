import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import LoginVue from '@/views/Login.vue';
import RegisterVue from '@/views/Register.vue';
import ForgetPasswordVue from '@/views/ForgetPassword.vue';
import HomeVue from '@/views/Home.vue';
import { isAuthenticated } from '@/services/AuthService';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => LoginVue,
    // meta: { isGuest: true },

  },
  {
    path: '/register',
    name: 'Register',
    component: () => RegisterVue
  },
  {
    path: '/forget-password',
    name: 'ForgetPassword',
    component: () => ForgetPasswordVue
  },
  {
    path: '/home',
    name: 'Home',
    component: () => HomeVue,
    meta: { requiresAuth: true },
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  console.log('here');
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated()) {
      next({ name: 'Login' });
    } else {
      next();
    }
    // } else if (to.matched.some((record) => record.meta.isGuest)) {
    //   next({ name: 'Home' });
  } else {
    next();
  }
});

export default router;
