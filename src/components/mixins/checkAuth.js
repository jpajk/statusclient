
const checkAuth = {
  created () {
    this.$store.dispatch('checkIsAuthenticated')
      .then(isAuthenticated => {
        if (!isAuthenticated) {
          this.$router.push({ name: 'Login' })
        }
      })
  }
}

export default checkAuth
