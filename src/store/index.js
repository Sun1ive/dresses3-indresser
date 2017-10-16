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
    ],
    collection: [
      { title: 'платье 01', img: '/static/gallery/d16_1.jpg', price: 1234, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptatum. Laudantium nihil odit doloremquenetur culpa, ad laboru' },
      { title: 'платье 02', img: '/static/gallery/d18_1.jpg', price: 1234, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptatum. Laudantium nihil odit doloremquenetur culpa, ad laboru' },
      { title: 'платье 03', img: '/static/gallery/d19_black1.jpg', price: 1234, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptatum. Laudantium nihil odit doloremquenetur culpa, ad laboru' },
      { title: 'платье 04', img: '/static/gallery/d20_bordo1.jpg', price: 1234, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptatum. Laudantium nihil odit doloremquenetur culpa, ad laboru' },
      { title: 'платье 05', img: '/static/gallery/d2bej2.jpg', price: 1234, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptatum. Laudantium nihil odit doloremquenetur culpa, ad laboru' },
    ]
  },
  getters: {

  }
})