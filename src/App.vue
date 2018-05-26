<template>
  <div id="app">
    <app-navbar/>
    <main role="main" class="container">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </main>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import AppNavbar from './components/Shared/AppNavbar'

export default {
  name: 'App',
  components: { AppNavbar }
}
</script>

<style>
  @import 'assets/scss/styles.scss';

  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
