<template>
  <v-app light>
    <!-- app toolbar -->
    <app-toolbar></app-toolbar>
    <!-- app main -->
    <app-main></app-main>
    <!-- app footer -->
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import toolbar from './components/toolbar'
import main from './components/main'
import footer from './components/footer'

  export default {
    components: {
      'app-toolbar': toolbar,
      'app-main': main,
      'app-footer': footer
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
