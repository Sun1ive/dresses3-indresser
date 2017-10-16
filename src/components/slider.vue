<template>
  <v-container fluid class="py-5">
    <carousel-3d autoplay :autoplayTimeout="5000" autoplayHoverPause :width="450" :height="600" :border="2">
      <slide :index="i" v-for="(item, i) in collection" :key="i">
        <img :src="item.img" :alt="item.title">
      </slide>
    </carousel-3d>
  </v-container>
</template>

<script>
  export default {
    computed: {
      collection () {
        return this.$store.state.collection
      }
    }
  }
</script>

<style scoped lang="stylus">
.container
  min-height 600px
.carousel-3d-container
  margin 0

.carousel-3d-slide
  border-radius 10px
</style>