<template>
  <v-container fluid>
    <v-parallax src="/static/banner2.png" height="500">
      <v-layout align-center>
        <v-flex xs12 sm6 lg4 class="text-xs-center">
          <div class="capital">Получи каталог стильной коллекции</div>
          <v-form class="catalogForm text-xs-right">
            <v-text-field label="Ваше имя"></v-text-field>
            <v-text-field label="Ваш телефон"></v-text-field>
            <v-text-field label="Ваш e-mail"></v-text-field>
            <v-btn type="submit" class="ml-0 myBtn">Получить каталог</v-btn>
          </v-form>
        </v-flex>
      </v-layout>
    </v-parallax>
  </v-container>
</template>

<script>
  export default {
    
  }
</script>

<style scoped lang="stylus">
.catalogForm
  // background-color red !important
  background-color #F1B415 !important
  border-radius 6px
  padding 1.5rem 2rem

.myBtn
  background-color red !important
  color #fff
  text-shadow 1px 1px 1px #333

.capital
  font-weight bold
  font-size 2rem
</style>