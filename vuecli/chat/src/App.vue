<template>
  <div id="app">
     <Navigation :navVal='activeNav'/> 
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
     this.activeNav.className = obj.className
   }
  },
  components: {
   Navigation
  }
}
</script>
<style>
#app {
  color: #2c3e50;
  padding: 1rem 0;
}
</style>
