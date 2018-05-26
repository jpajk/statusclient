<template>
    <div>
        hello me <br/>
        <a href="#" class="btn btn-primary">whatever</a>
    </div>
</template>

<script>
// import checkAuth from './mixins/checkAuth'

export default {
  mixins: [],
  name: 'Home',
  mounted () {
    this.$http.get('/statuses').then(res => {
      console.log('my glorious response', res)
    })
  }
}
</script>

<style scoped>

</style>
