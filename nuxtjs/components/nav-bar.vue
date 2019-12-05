<template>
  <v-toolbar>
    <v-toolbar-title>Nuxt js</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <!--      <nuxt-link  :to="item.name" :prefetch="item.prefetch" class="text-black-50">{{item.name}}</nuxt-link>-->

      <v-btn text v-for="(item , i) in btn" :key="`item_${i}`"
        :to="item.name" :prefetch="item.prefetch" class="text-black-50">{{item.name}}
      </v-btn>
      <v-btn v-for="(item , i) in login" @click.prevent="logout" :key="`item_${i}`">{{item.name}}</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    name: "navbar",

    data() {
      return {
        btn : [
          {
            name : 'home',
            prefetch : false
          },
          {
            name : 'about',
            prefetch : false
          },
          {
            name : 'link',
            prefetch : false
          },
          {
            name : 'users',
            prefetch : false
          },
        ],
        login : [
          {
            name : 'login',
            prefetch: false
          },
          {
            name : 'logout',
            prefetch: false
          },
        ]
      }
    },
    methods : {
      logout(){
        this.$store.dispatch('logout')
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped>

</style>
