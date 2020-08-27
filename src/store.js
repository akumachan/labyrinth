import { createStore } from "vuex";

export const maxRoomNumber = 30;

export default createStore({
  state: {
    currentLocation: '0',
    hasRedStone: false,
    hasBlueStone: false,
    hasYellowStone: false,
  },
  getters:{
    currentLocation (state) {
      return state.currentLocation
    },
    hasAllStones (state) {
      return state.hasRedStone && state.hasYellowStone && state.hasBlueStone
    }
  },
  mutations: {
    setCurrentLocation (state, location) {
      state.currentLocation = location
    },
    setRedStone (state) {
      state.hasRedStone = true
    },
    setYellowStone (state) {
      state.hasYellowStone = true
    },
    setBlueStone (state) {
      state.hasBlueStone = true
    },
  },
  actions: {
    updateCurrentLocation (context, location) {
      context.commit('setCurrentLocation', location)
    },
    acquireRedStone (context) {
      context.commit('setRedStone')
    },
    acquireYellowStone (context) {
      context.commit('setYellowStone')
    },
    acquireBlueStone (context) {
      context.commit('setBlueStone')
    },
  }
})