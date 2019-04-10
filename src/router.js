import Vue from 'vue';
import Router from 'vue-router';
import Register from './views/auth/register.vue';
import Login from './views/auth/login.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/register',
      component: Register
    },
    {
      path: '/login',
      component: Login
    }
  ]
});
