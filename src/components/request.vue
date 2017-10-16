<template>
  <v-container fluid>
    <v-parallax src="/static/collectionBanner.png" height="700">
      <v-layout column wrap align-center justify-center>
        <v-flex xs12>
          <div class="backgroundText"><span>Эту коллекцию очень быстро разбирают</span></div>
          <div class="backgroundText"><span>Эту коллекцию очень быстро разбирают</span></div>
          <v-form class="form text-xs-right">
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
.container
  margin-top -1rem
</style>