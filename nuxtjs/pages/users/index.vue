<template>
<v-container>
  <h1>{{pageTitle}}</h1>
  <ul>
    <li v-for="(user,i) of users" :key="`user_${i}`"><a href="#" @click.prevent="openUser(user)" class="text-black-50">{{user.id}} : {{user.name}}</a></li>
  </ul>
</v-container>
</template>

<script>
    export default {
      async fetch({store}) {
        if (store.getters['users/users'].length === 0) {
          await store.dispatch('users/fetch')
        }
      },
      data : () => ({
         pageTitle : 'Users page'
      }),
      name: "index",
      methods: {
        openUser (user){
        this.$router.push('/users/' + user.id)
          }
      },
      computed : {
        users () {
          return this.$store.getters['users/users']
        }
      }
    }
</script>

<style scoped>
ul {
  list-style: none;
}
</style>
