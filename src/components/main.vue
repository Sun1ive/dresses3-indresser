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
    <!-- video -->
    <section class="video">
      <app-video></app-video>
    </section>
    <!-- request -->
    <section class="request">
      <app-request></app-request>
    </section>
    <!-- comments -->
    <section class="comments">
      <app-comments></app-comments>
    </section>
    <!-- collection -->
    <section class="collection">
      <app-collection></app-collection>
    </section>
    <!-- special offer -->
    <section class="special">
      <app-special></app-special>
    </section>
  </main>
</template>

<script>
import banner from './banner'
import slider from './slider'
import catalog from './catalog'
import reviews from './reviews'
import video from './video'
import request from './request'
import comments from './comments'
import collection from './collection'
import special from './special'

export default {
  components: {
    'app-banner': banner,
    'app-slider': slider,
    'app-catalog': catalog,
    'app-reviews': reviews,
    'app-video': video,
    'app-request': request,
    'app-comments': comments,
    'app-collection': collection,
    'app-special': special
  }
}
</script>

<style scoped></style>