import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import LoginVue from '@/views/Login.vue';
import RegisterVue from '@/views/Register.vue';
import ForgetPasswordVue from '@/views/ForgetPassword.vue';
import HomeVue from '@/views/Home.vue';
import VerifyVue from '@/views/Verify.vue';
import { isAuthenticated } from '@/services/AuthService';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginVue,
    meta: { isGuest: true },
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterVue,
    meta: { isGuest: true },
  },
  {
    path: '/verify',
    name: 'VerifyOtp',
    component: VerifyVue,
    meta: { isGuest: true },
  },
  {
    path: '/forget-password',
    name: 'ForgetPassword',
    component: ForgetPasswordVue,
    meta: { isGuest: true },
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeVue,
    meta: { requiresAuth: true },
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated()) {
      next({ name: 'Login' });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.isGuest)) {
    if (isAuthenticated()) {
      next({ name: 'Home' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
