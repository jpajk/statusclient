
const checkAuth = {
  created () {
    this.$store.dispatch('checkIsAuthenticated')
      .then(res => {
        if (!res.data.currentUser) {
          this.$router.push({ name: 'Login' })
        }
      })
      .catch(err => {
        console.log(err)
        this.$router.push({ name: 'Login' })
      })
  }
}

export default checkAuth
