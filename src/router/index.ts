import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabVue from '@/views/myComponents/Tab.vue';
// Guest
import LoginVue from '@/views/Guest/Login.vue';
import RegisterVue from '@/views/Guest/Register.vue';
import ForgetPasswordVue from '@/views/Guest/ForgetPassword.vue';
import VerifyVue from '@/views/Guest/Verify.vue';
// Home/Dashboard
import HomeVue from '@/views/Home.vue';
// Fund Wallet
import FundWalletVue from '@/views/FundWallet.vue';
import AccountInfoVue from '@/views/FundWallet/AccountInfo.vue';
import FundByCardVue from '@/views/FundWallet/FundByCard.vue';
// Pay for services
import PayVue from '@/views/Pay.vue';
import DataRechargeVue from '@/views/Pay/DataRecharge.vue';
import AirtimeRechargeVue from '@/views/Pay/AirtimeRecharge.vue';
//More
import MoreVue from '@/views/More.vue';

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
    component: FundByCardVue,
  },
  {
    path: '/account-info',
    name: 'AccountInfo',
    component: AccountInfoVue,
  },
  {
    path: '/data-recharge',
    name: 'DataRecharge',
    component: DataRechargeVue,
    meta: { requiresAuth: true },
  },
  {
    path: '/airtime-recharge',
    name: 'AirtimeRecharge',
    component: AirtimeRechargeVue,
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
      next({ name: 'Tabs' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
