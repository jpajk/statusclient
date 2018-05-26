import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import NotFound from '@/components/Shared/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
    { path: '*', name: 'NotFound', component: NotFound }
  ]
})
