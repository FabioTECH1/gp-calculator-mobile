import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import LoginVue from '@/views/Login.vue';
import RegisterVue from '@/views/Register.vue';
import ForgetPasswordVue from '@/views/ForgetPassword.vue';
import HomeVue from '@/views/Home.vue';
import VerifyVue from '@/views/Verify.vue';
import FundWalletVue from '@/views/FundWallet.vue';
import AccountInfoVue from '@/views/AccountInfo.vue';
import FundByCardVue from '@/views/FundByCard.vue';
import PayVue from '@/views/Pay.vue';
import MoreVue from '@/views/More.vue';
import TabVue from '@/views/myComponents/Tab.vue';
import { isAuthenticated } from '@/services/AuthService';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/auth/'
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
    path: '/auth/',
    name: 'Tabs',
    component: TabVue,
    meta: { requiresAuth: true },
    children: [
      {
        path: '/auth/',
        redirect: 'auth/home'
      },
      {
        path: 'home',
        name: 'Home',
        component: () => HomeVue,
      },
      {
        path: 'fund',
        name: 'FundWallet',
        component: () => FundWalletVue,
      },
      {
        path: 'pay',
        name: 'Pay',
        component: () => PayVue,
      },
      {
        path: 'more',
        name: 'More',
        component: () => MoreVue,
      },
    ]
  },
  {
    path: '/fund/card',
    name: 'FundByCard',
    component: () => FundByCardVue,
  },
  {
    path: '/account-info',
    name: 'AccountInfo',
    component: () => AccountInfoVue,
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
      next({ name: 'Tabs' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
