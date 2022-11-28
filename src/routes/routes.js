import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';

import NotFound from '@/views/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    redirect: 'dashboard',
    component: DashboardLayout,
    children: [
  
      {
        path: '/icons',
        name: 'icons',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Icons.vue')
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/UserProfile.vue')
      },
    
      {
        path: '/tables',
        name: 'tables',
        component: () => import(/* webpackChunkName: "demo" */ '../views/RegularTables.vue')
      },
      {
        path: '/tambahrumah',
        name: 'tambahrumah',
        component: () => import(/* webpackChunkName: "demo" */ '../views/TambahRumah.vue')
      },
      {
        path: '/editrumah/:id_rumah',
        name: 'editrumah',
        component: () => import(/* webpackChunkName: "demo" */ '../views/EditRumah.vue')
      },
      {
        path: '/tambahadmin',
        name: 'tambahadmin',
        component: () => import(/* webpackChunkName: "demo" */ '../views/TambahAdmin.vue')
      },
      {
        path: '/editadmin/:id_admin',
        name: 'editadmin',
        component: () => import(/* webpackChunkName: "demo" */ '../views/EditAdmin.vue')
      },
    ]
  },
  {
    path: '/',
    redirect: 'login',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Login.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Register.vue')
      },
      { path: '*', component: NotFound }
    ]
  }
];

export default routes;
