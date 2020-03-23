import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/crud',
      component: Home,
    },
    {
      path: '/crud/users',
      component: () => import('./views/UsersPage.vue'),
    }
  ]
});