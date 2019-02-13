<template>
  <div id="app">
    <div id="nav">
      <button @click='back'>返回首页</button>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/mine">我的</router-link>|
      <router-link to="/test">测试</router-link>|
       <router-link :to="{name:'test1',params:{name:'Hello',age:'20'}}">测试子路由1</router-link>|
        <router-link to="/test2/ls/30">测试子路由2</router-link>|
        <router-link to="/home">返回首页</router-link> |
        <router-link to="/redirect/ww/40">返回测试子路由2</router-link>|
        <router-link to="/abc">alias</router-link>|
    </div>
    <trasition name='fade'>
    <router-view/>
    </trasition>
  </div>
</template>
<script>
export default {
  methods:{
    back(){
      console.log(123);
      this.$router.puth('/')
    }
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
.fade-enter{
  opacity: 0;
}
.fade-enter-avtive{
  transition: all 1s ease 1s;
}
.fade-enter-to{
  opacity: 1;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  transition: all 1s ease;
}
.fade-leave-to{
  opacity: 0;
}
</style>
