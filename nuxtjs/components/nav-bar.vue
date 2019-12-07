<template>
  <v-toolbar>
    <v-toolbar-title>Nuxt js</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <!--      <nuxt-link  :to="item.name" :prefetch="item.prefetch" class="text-black-50">{{item.name}}</nuxt-link>-->

      <v-btn text v-for="(item , i) in btn" :key="`item_${i}`"
        :to="item.name" :prefetch="item.prefetch" class="text-black-50">{{item.name}}
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn class="ml-5" to="/login" v-if="!hasToken" text>login</v-btn>
      <v-btn class="ml-5" @click.prevent="logout" v-if="hasToken" text>log out</v-btn>
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
    },
    computed : {
      hasToken () {
        return this.$store.getters.hasToken
      }
    }
  }
</script>

<style scoped>

</style>
