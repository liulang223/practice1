<template>
  <div v-bind:class="activeClass">
    <header>
      <span @click='routerPush(btnList[0])'>首页</span>
      <h1>{{propsVal}}</h1>
    </header>
    <nav>
      <ul>
        <li :class="{'active':item.name==activeTittle}" v-for="(item,index) in btnList" :key="index" @click="routerPush(item)">{{item.name}}</li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeTittle:'電影',
      activeClass:'movie',
      btnList: [
        {
          name: "电影",
          routerPath: "/",
          className: "move"
        },
        {
          name: "音乐",
          routerPath: "/music",
          className: "music"
        },
        {
          name: "书籍",
          routerPath: "/book",
          className: "book"
        },
        {
          name: "聊天",
          routerPath: "/chat",
          className: "chat"
        }
      ]
    };
  },
  props:['navVal'],
  methods: {
    routerPush(obj) {
      this.activeClass = obj.className;
      this.activeTittle = obj.name;
      this.$router.push(obj.routerPath);
    }
  },
  computed:{
    propsVal(){
     return this.navVal.tittle
    }
  },
  watch: {
    propsVal(){
      this.activeTittle = this.navVal.tittle,
      this.activeClass = this.navVal.className
    }
  }
};
</script>
<style scoped>
header,
nav {
  color: #fff;
  position: fixed;
  width: 100%;
  height: 1rem;
  text-align: center;
   background-color: rgb(33, 150, 243);
}
 .movie header,.movie nav{
    background-color: rgb(33, 150, 243);
  }
  .music header,.music nav{
    background-color: rgb(0, 150, 136);
  }
  .book header,.book nav{
    background-color: rgb(121, 85, 72);
  }
  .chat header,.chat nav{
    background-color: rgb(63, 81, 181);
  }
header {
  top: 0;
}
header span {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}
nav {
  bottom: 0;
}
nav ul {
  width: 100%;
}
nav li {
  color: #ddd;
  float: left;
  width: 25%;
  height: 1rem;
  line-height: 1rem;
}
nav li.active{
  color: #fff;
  font-weight: bolder;
  font-size:20px;
}
</style>