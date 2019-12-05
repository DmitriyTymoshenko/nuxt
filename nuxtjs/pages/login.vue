<template>
<v-container>
  <from @submit.prevent="onSubmit()">
    <v-text-field placeholder="login" type="text"></v-text-field>
    <v-text-field placeholder="password" type="password"></v-text-field>
    <v-btn>Submit</v-btn>
  </from>
</v-container>
</template>

<script>
    export default {
        name: "login",
        layout : 'empty',
      methods : {
        onSubmit() {
          this.$store.dispatch('login')
          this.$router.push({name : 'home'})
        }
      }
    }
</script>

<style scoped>

</style>
