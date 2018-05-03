<template>
    <div>
        hello me <br/>
        <a href="#" class="btn btn-primary">whatever</a>
    </div>
</template>

<script>
import checkAuth from './mixins/checkAuth'

export default {
  mixins: [checkAuth],
  name: 'Home'
}
</script>

<style scoped>

</style>
