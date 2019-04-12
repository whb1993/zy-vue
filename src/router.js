import Vue from 'vue';
import Router from 'vue-router';
import Register from './views/auth/register.vue';
import Login from './views/auth/login.vue';
import Dashboard from './views/dashboard/Dashboard';
import Overview from './views/dashboard/Overview';
import Node from './views/dashboard/Node';
import Problem from './views/dashboard/Problem';
import Statistics from './views/dashboard/Statistics';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/register',
      component: Register,
      meta: { title: '注册' }
    },
    {
      path: '/login',
      component: Login,
      meta: { title: '登录' }
    },
    {
      path: '/dashboard',
      component: Dashboard,
      redirect: '/dashboard/overview',
      meta: { title: '监控概览' },
      children: [
        {
          path: 'overview',
          component: Overview,
          meta: { title: '监控概览' }
        },
        {
          path: 'node',
          component: Node
        },
        {
          path: 'problem',
          component: Problem
        },
        {
          path: 'statistics',
          component: Statistics
        }
      ]
    }
  ]
});
