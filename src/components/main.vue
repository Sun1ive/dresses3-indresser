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
  </main>
</template>

<script>
import banner from './banner'
import slider from './slider'
import catalog from './catalog'




  export default {
    components: {
      'app-banner': banner,
      'app-slider': slider,
      'app-catalog': catalog
    }
  }
</script>

<style scoped></style>