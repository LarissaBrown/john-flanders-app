import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/event/:id',
      name: 'eventSingle',
      component: () => import('../views/EventSingle.vue'),
    },
  ],
});