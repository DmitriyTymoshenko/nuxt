<template>
<div>
  <h1>{{user.name}}</h1>
  <hr>
  <h3>{{user.email}}</h3>
</div>
</template>

<script>
    export default {
        name: "id",
      validate ({params}) {
        return /^\d+$/.test(params.id)
      },
      async asyncData ({$axios, params}) {
        const user = await $axios.$get('https://jsonplaceholder.typicode.com/users/' + params.id)
        return {user}
      },
    }
</script>

<style scoped>

</style>
