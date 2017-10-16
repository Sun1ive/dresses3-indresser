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
    <!-- catalog -->
    <section class="catalog">
      <app-catalog></app-catalog>
    </section>
    <!-- reviews -->
    <section class="reviews">
      <app-reviews></app-reviews>
    </section>
  </main>
</template>

<script>
import banner from './banner'
import slider from './slider'
import catalog from './catalog'
import reviews from './reviews'


  export default {
    components: {
      'app-banner': banner,
      'app-slider': slider,
      'app-catalog': catalog,
      'app-reviews': reviews
    }
  }
</script>

<style scoped></style>