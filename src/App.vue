<template>
  <div id="app">
    <app-navbar/>
    <main role="main" class="container">
      <router-view/>
    </main>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import AppNavbar from './components/Shared/AppNavbar'

export default {
  name: 'App',
  components: {AppNavbar}
}
</script>

<style>
  @import 'assets/scss/styles.scss';
</style>
