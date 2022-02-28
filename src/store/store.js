
import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    cancion: "Friki",
    user: null,
    cartItems: []
  },
  mutations: {
    change(state){
      state.cancion = "si";
    },
    addUser(state, data = {} ){
      state.user = data || null;
    },
    addItem(state, data = {} ){
      state.cartItems.push(data || {name: "pan"});
    }
  },
  
});

export default store;