<template>
  <v-container fluid>
    <v-layout>
      <img src="/static/banner5.png" alt="banner5">
      <div class="backgroundText"><span>Что говорят девушки, которые уже получили нашу одежду?</span></div>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    
  }
</script>

<style scoped lang="stylus">
.layout
  position relative
  img
    width 100%
    max-height 700px
  .backgroundText
    position absolute
    left 50%
    top 50%
    transform translate(-50%,-50%)
</style>