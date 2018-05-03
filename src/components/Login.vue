<template>
    <div class="col-sm-6 offset-3">
        <h2 class="text-center">Login or register</h2>
        <b-form >
            <b-form-group
                    label="Email:"
                    label-for="email-input"
            >
            <b-form-input
                    id="email-input"
                    type="email"
                    v-model="form.email"
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
                        v-model="form.password"
                        required
                        placeholder="Enter password"
                >
                </b-form-input>
            </b-form-group>
            <div class="text-right">
                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="warning">I forgot my password</b-button>
            </div>
        </b-form>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data: () => {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
