<template>
  <div id="app">
     <Navigation :navVal='activeNav'> </Navigation>
    <transition>
      <router-view @changeNav='change'/>
    </transition>
  </div>
</template>
<script>
import Navigation from '@/components/Navigation.vue'
export default {
  data(){
    return{
    activeNav:{
      tittle:'電影',
      className:'move'
    }
    }
  },
  methods:{
   change(obj){
     this.activeNav.tittle = obj.tittle,
     this.className = obj.className
   }
  },
  components: {
   Navigation
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
