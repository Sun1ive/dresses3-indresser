<template>
  <v-app light>
    <!-- app toolbar -->
    <app-toolbar></app-toolbar>
    <!-- app main -->
    <app-main></app-main>
  </v-app>
</template>

<script>
import toolbar from './components/toolbar'
import main from './components/main'

  export default {
    components: {
      'app-toolbar': toolbar,
      'app-main': main
    },
    data () {
      return {
      }
    }
  }
</script>

<style lang="stylus">
body
  font-family Arial, Helvetica, sans-serif
</style>
