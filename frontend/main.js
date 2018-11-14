import Vue from 'vue'
import Router from 'vue-router'

import App from './App.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'

Vue.use(Router)

const router = new Router({routes: [
  { path: '/', component: Home },
  { path: '/login', component: Login },
]})

router.beforeEach((to, from, next) => {
  // Redirect to login if not logged in and trying to access a restricted page.
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn)
    return next('/login');
  next();
})

new Vue({
  el: '#vue-main',
  router,
  render: h => h(App)
})
