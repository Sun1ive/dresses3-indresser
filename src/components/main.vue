<template>
  <main>
    <!-- banner -->
    <section class="banner">
      <app-banner></app-banner>
    </section>
  </main>
</template>

<script>
import banner from './banner'



  export default {
    components: {
      'app-banner': banner
    }
  }
</script>

<style scoped lang="stylus">

</style>