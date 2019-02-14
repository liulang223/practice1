<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{count}}</h1>
    <h2>{{count1}}</h2>
    <button @click="addAction">增加</button>
    <button @click="reduceAction">减少</button>
  </div>
</template>
<script>
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';
export default {
  data(){
    return {
      msg:'hello world'
    }
  },
  methods: {
    ...mapMutations(['add','reduce']),
    ...mapActions(['addAction','reduceAction'])
  },
  computed:{
    ...mapState(['count']),
    ...mapGetters(['count1'])
  },
  // computed:mapState({
  //   count:state =>state.count
  // })

  // computed: {
  //   count(){
  //     return this.$store.state.count;
  //   }
  // },

  // beforeRouteEnter (to, from, next) {
  //   console.log(to);
  //   console.log(from);
  //   next();
  // },
  // beforeRouteLeave (to, from, next) {
  //   console.log(to);
  //   console.log(from);
  //   next();
  // }
}
</script>