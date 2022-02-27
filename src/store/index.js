
import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    cancion: "Friki",
    user: null
  },
  mutations: {
    change(state){
      state.cancion = "malparida";
    },
    addUser(state, data = {} ){
      state.user = data || null;
    }
  },
  
});

export default store;