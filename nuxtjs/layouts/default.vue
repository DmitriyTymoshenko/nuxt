<template>
  <div>
    <NavBar></NavBar>
    <v-container>
      <nuxt/>
    </v-container>
  </div>
</template>
<script>
  import NavBar from '@/components/nav-bar.vue'

  export default {
    components: {
      NavBar
    }
  }
</script>
