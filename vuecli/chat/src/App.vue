<template>
  <div id="app">
     <Navigation> </Navigation>
    <transition>
      <router-view/>
    </transition>
  </div>
</template>
<script>
import Navigation from '@/components/Navigation.vue'
export default {
  name: 'movie',
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
