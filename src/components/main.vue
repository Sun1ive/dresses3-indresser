<template>
  <main>
    <!-- banner -->
    <section class="banner">
      <app-banner></app-banner>
    </section>
    <!-- slider -->
    <section class="Slider">
      <app-slider></app-slider>
    </section>
  </main>
</template>

<script>
import banner from './banner'
import slider from './slider'



  export default {
    components: {
      'app-banner': banner,
      'app-slider': slider
    }
  }
</script>

<style scoped></style>