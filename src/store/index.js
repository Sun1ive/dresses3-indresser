import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    menu: [
      { title: 'button', icon: 'star', scrollTo: '3' },
      { title: 'button2', icon: 'star', scrollTo: '3' },
      { title: 'button3', icon: 'star', scrollTo: '3' },
      { title: 'button4', icon: 'star', scrollTo: '3' },
      { title: 'button5', icon: 'star', scrollTo: '3' },
    ]
  },
  getters: {
    
  }
})