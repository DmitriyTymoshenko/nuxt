<template>
<v-container>
  <div v-if="$route.query.message" id="error">
    Need login
  </div>
  <v-form @submit.prevent="onSubmit">
    <v-text-field placeholder="login" type="text"></v-text-field>
    <v-text-field placeholder="password" type="password"></v-text-field>
    <v-btn type="submit">Submit</v-btn>
  </v-form>
</v-container>
</template>

<script>
    export default {
        name: "login",
        layout : 'empty',
      methods : {
        onSubmit() {
          this.$store.dispatch('login')
          this.$router.push({name : 'about'})
        }
      }
    }
</script>

<style scoped>
#error {
  color: red;
  font-size: 30px;
  text-align: center;
}
</style>
