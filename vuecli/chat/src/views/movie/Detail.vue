<template>
    <div class='detail'>
        <h2>{{det.title}}</h2>
        <ul>  
            <h3>{{det.genres[0]}}|{{det.genres[1]}}</h3>
            <h4>{{det.countries}}</h4>
            <li></li>
            <h5>{{det.summary}}</h5>
       </ul>
    </div>
</template>
<style scoped>
.detail h2{
    text-align: center;
}
</style>
<script>
export default {
    data(){
     return {
         det:{
             genres:{},
         }
     }
    },
    created(){
      this.getData();
    },
    methods:{
         getData(){
        let pro='https://bird.ioliu.cn/v2?url='
        let url=`https://api.douban.com/v2/movie/subject/${this.$route.params.movieId}`
        axios.get(pro+url).then((res)=>{
            this.det = res.data;
        })
    },
   
    }
}
</script>



