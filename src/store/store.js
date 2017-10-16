import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    menu: [
      { title: 'button', icon: 'star', scrollTo: '' },
      { title: 'button2', icon: 'star', scrollTo: '' },
      { title: 'button3', icon: 'star', scrollTo: '' },
      { title: 'button4', icon: 'star', scrollTo: '' },
      { title: 'button5', icon: 'star', scrollTo: '' },
    ]
  }
})