import Vue from 'vue'
import Vuex, { mapState } from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  count:0,
  },
  mutations: {
   add(state,num){
     state.count += num;
   },
   reduce(state){
     state.count--;
   }
  },
  actions: {
   addAction({commit}){
     commit('add',10);
   },
   reduceAction({commit}){
     commit('reduce');
   }
  },
  getters:{
    count1(state){
        return state.count +100;
    },
  }
})
