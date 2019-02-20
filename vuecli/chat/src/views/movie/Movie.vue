<template>
  <div>
    <ul>
      <li class='item-list clearfix' v-for="(item,index) in dataList" :key='index' @click="getDetails(item.id)">
        <div class='list-left'>
          <img :src="item.cover.url" alt="">
        </div>
        <div class='list-right'>
          <h4>{{item.tittle}}</h4>
          <span v-for='(item,index) in item.actors' :key='index'>{{item}}|</span>
          <p>{{item.year}}年</p>
        </div>
      </li>
    </ul>
    <div class='loading' v-show='!isLoading'>
      <div class='loading-content'>
         <img src="../../assets/img/loading.gif" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    let obj = {
      tittle: "电影",
      className: "movie"
    };
    this.$emit("changeNav", obj);
    this.getData();
  },
  data(){
      return {
        dataList:[],
        listStart:0,
        isLoading:true,
      }
  },
  mounted(){
    window.onscroll = () =>{
      let clientHeight = document.documentElement.clientHeight;
      let scrollTop = document.documentElement.scrollTop;
      let scrollHeight = document.documentElement.scrollHeight;
      if(clientHeight+scrollTop>=scrollHeight-10 && this.isLoading && this.dataList.length !=25){
        this.listStart+=10;
        this.getData()
      }
    }
  },
  methods: {
    getData() {
      let pro= 'https://bird.ioliu.cn/v2?url='
      let url = `https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?start=${this.listStart}&count=10`
      this.isLoading= false;  
      axios
        .get(pro + url)
        .then((res)=> {
           this.dataList = this.dataList.concat(res.data.subject_collection_items)
           this.isLoading = true;

        })
        .catch((res)=> {
          console.log("error");
        });
    },
    getDetails(id){
          this.$router.push({name:'moviedetail',params:{movieId:id}} )
    }
  }
}
</script>
<style scoped>
  .loading{
    background-color: rgba(0,0,0,.3);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .loading-content{
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -75px;
    margin-top: -75px;
    width: 150px;
    height: 150px;
    background-color: rgba(255,255,255,.6);
    border-radius:10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ul{
    padding:10px;
  }
  .item-list{
     border-bottom: 1px solid #333;
     padding: 20px 0;
  }
  .item-list .list-left{
    float: left;
    width: 40%;
    text-align: center;
  }
  .item-list .list-left img{
   width: 80%;
    
  }
  .item-list .list-right{
    float: left;
    width: 55%;
    padding-left: 5%;
  }
</style>
