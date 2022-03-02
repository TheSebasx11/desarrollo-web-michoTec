
import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    user: null,
    cartItems: []
  },
  mutations: {
    addUser(state, data = {} ){
      state.user = data || null;
    },
    addItem(state, data = {} ){
      state.cartItems.push(data || {name: ""});
    }
  },
  
});

export default store;