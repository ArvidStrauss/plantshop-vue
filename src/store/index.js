import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        image: require("@/assets/img/flowers4.jpg"),
        title: "Rosen aus Hellerau",
        price: 20.0,
        description: "tolle Rosen",
        rating: 3.0,
        reviews: [
          {
            author: "Marco",
            review: "super",
            rating: 4.5
          }
        ]
      },
      {
        id: 2,
        image: require("@/assets/img/flowers10.jpg"),
        title: "Tulpen aus Neustadt",
        price: 40.0,
        description: "tolle Tulpen",
        rating: 4.5,
        reviews: [
          {
            author: "Marco",
            review: "super",
            rating: 2.5
          }
        ]
      },
      {
        id: 3,
        image: require("@/assets/img/flowers8.jpg"),
        title: "Nelken aus Radebeul",
        price: 35.99,
        description: "klasse Nelken",
        rating: 4.0,
        reviews: [
          {
            author: "Marco",
            review: "super",
            rating: 4.5
          }
        ]
      },
      {
        id: 4,
        image: require("@/assets/img/flowers9.jpg"),
        title: "Margeriten aus Striesen",
        price: 19.5,
        description: "tolle margis",
        rating: 5.0,
        reviews: [
          {
            author: "Marco",
            review: "super",
            rating: 4.5
          }
        ]
      }
    ],
    cartProducts: []
  },
  mutations: {
    add(state, newProduct) {
      state.cartProducts.push(newProduct);
    },
    changeQty(state, payload) {
      state.cartProducts.find(element => element.id == payload.id).qty +=
        payload.qty;
    },
    remove(state, id) {
      const index = state.cartProducts.findIndex(e => e.id === id);
      state.cartProducts.splice(index, 1);
    }
  },
  actions: {},
  modules: {}
});
