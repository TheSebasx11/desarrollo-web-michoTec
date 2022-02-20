'use strict'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    layout: 'home-layout'
  },
  mutations: {
    SET_LAYOUT (state, newLayout) {
      state.layout = newLayout
    }
  }
})