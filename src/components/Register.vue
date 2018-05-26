<template>
    <div class="col-sm-6 offset-3">
        <h2 class="text-center">Register</h2>
        <b-form >
            <b-form-group
                    label="Email:"
                    label-for="email-input"
            >
            <b-form-input
                    id="email-input"
                    type="email"
                    v-model="email"
                    required
                    placeholder="Enter email"
                >
            </b-form-input>
            </b-form-group>
            <b-form-group
                    label="Password:"
                    label-for="password-input"
            >
                <b-form-input
                        id="password-input"
                        type="password"
                        v-model="password"
                        required
                        placeholder="Enter password"
                >
                </b-form-input>
            </b-form-group>
            <b-form-group
                    label="Repeat password:"
                    label-for="repeat-password-input"
            >
                <b-form-input
                        id="repeat-password-input"
                        type="password"
                        v-model="repeatPassword"
                        required
                        placeholder="Repeat password"
                >
                </b-form-input>
            </b-form-group>
            <div class="text-right">
                <b-button type="submit" @click.prevent="loginOrRegister" variant="primary">Submit</b-button>
                <router-link class="btn btn-light" :to="{name: 'Login'}">
                    Back to login
                </router-link>
            </div>
        </b-form>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data: () => {
    return {
      email: '',
      password: '',
      repeatPassword: ''
    }
  },
  methods: {
    loginOrRegister () {
      this.$store.dispatch('register', {email: this.email, password: this.password})
        .then(() => {
          this.$router.push({ name: 'Home' })
        })
        .catch(err => {
          console.log(err) // todo messages
        })
    }
  }
}
</script>

<style scoped>

</style>
