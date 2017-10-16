<template>
  <v-app light>
    <app-toolbar></app-toolbar>
  </v-app>
</template>

<script>
import toolbar from './components/toolbar'

  export default {
    components: {
      'app-toolbar': toolbar
    },
    data () {
      return {
      }
    }
  }
</script>
