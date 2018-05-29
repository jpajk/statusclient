<template>
    <b-navbar class="fixed-top bg-dark" variant="primary" type="dark">
        <b-navbar-brand href="#">Employee Status</b-navbar-brand>
        <ul class="navbar-nav" v-if="this.$store.getters.token">
            <li class="nav-item">
                <a class="nav-link" @click="logout" href="#">
                    Logout
                </a>
            </li>
        </ul>
    </b-navbar>
</template>

<script>
export default {
  name: 'AppNavbar',
  methods: {
    logout () {
      this.$store.commit('CLEAR')
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style scoped>

</style>
