
const checkAuth = {
  created () {
    this.$store.dispatch('checkIsAuthenticated')
      .then(isAuthenticated => {
        if (!isAuthenticated) {
          this.$router.push({ name: 'Login' })
        }
      })
      .catch(err => {
        if (err.response.status === 401) {
          this.$router.push({ name: 'Login' })
        }
      })
  }
}

export default checkAuth
