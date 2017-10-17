<template>
  <v-container fluid>
<!--     <v-layout>
      <v-flex xs12 class="test text-xs-center">
        <img src="/static/comments.jpg" alt="background">
        <div class="content">
          <div class="avatar">
            <img src="http://funkyimg.com/i/2ynJE.png" alt="Oksana">
          </div>
        </div>
        <div class="content2">Мы собрали команду молодых дизайнеров, которые предлагают нашим клиентам экслюзивную, модную, удобную, качественную одежду. А с учетом собственной реализации мы предлагаем отличные цены. Наши постоянные клиенты будут приятно удивлены. Рекомендую и Вам убедиться в этом.</div>
      </v-flex>
    </v-layout> -->
    <v-layout justify-center align-center>
      <v-flex xs12 class="background">
        <v-flex xs12 sm6 lg4 class="text-xs-center">
          <v-avatar size="300px">
            <img src="http://funkyimg.com/i/2ynJE.png" alt="">
          </v-avatar>
        </v-flex>
        <v-flex xs12 sm6 lg4 class="text-xs-center">
          <div class="content">Мы собрали команду молодых дизайнеров, которые предлагают нашим клиентам экслюзивную, модную, удобную, качественную одежду. А с учетом собственной реализации мы предлагаем отличные цены. Наши постоянные клиенты будут приятно удивлены. Рекомендую и Вам убедиться в этом.</div>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<style scoped lang="stylus">

.background
  background-image url('../../static/comments.jpg')
  // background-size 100% 100%
  background-size 100% auto

  width 100%
  min-height 900px
  display flex
  justify-content center
  align-items center
  position relative

/* .test
  position relative
  img
    width 100%
    max-height 900px

.avatar
  height 300px
  width 300px

.content
  position absolute
  top 50%
  left 15%
  transform translate(0%, -50%) */
/* 
.content2
  position absolute
  right 15%
  top 50%
  transform translate(15%, -50%)
  width 50%
  background-color #F3B020
  padding 1.5rem
  font-size 1.6rem
  color #fff */

.content
  background-color #F3B020
  padding 1.5rem
  font-size 1.6rem
  color #fff
  box-shadow 0px 0px 10px 10px #F3B020
</style>