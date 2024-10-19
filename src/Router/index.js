import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import DashboardLayout from '../layouts/DashboardLayout.vue';
import HomePage from '../views/HomePage.vue';
import ConTact from '../views/ConTact.vue';
import CreaTive from '../views/CreaTive.vue';
import PortFolio from '../views/PortFolio.vue';
import ProfilePage from '../views/ProfilePage.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '',
        name: 'Home', // Ensure this is correctly named
        component: HomePage,
      },
      {
        path: 'contact',
        name: 'Contact',
        component: ConTact,
      },
      {
        path: 'creative',
        name: 'Creative',
        component: CreaTive,
      },
      {
        path: 'portfolio',
        name: 'Portfolio',
        component: PortFolio,
      },
      {
        path: 'profile',
        name: 'Profile',
        component: ProfilePage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
