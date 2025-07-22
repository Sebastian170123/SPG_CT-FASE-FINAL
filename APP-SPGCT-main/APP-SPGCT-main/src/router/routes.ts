import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/Login',
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('pages/Login.vue'),
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'nuevo-productor',
        name: 'nuevo-productor',
        component: () => import('pages/IndexPage.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'productores',
        name: 'productores',
        component: () => import('pages/ProductoresPage.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('pages/DashboardPage.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'historialPage',
        name: 'historialPage',
        component: () => import('pages/historialPage.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'recuperar-contrasena',
        name: 'recuperar-contrasena',
        component: () => import('pages/Recuperar-contraseña.vue'),
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
