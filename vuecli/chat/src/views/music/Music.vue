<template>
<div>
    <aplayer autoplay
    v-if='isShow'
    :music='musicList[0]'
    :list='musicList'
    :showLrc='true'
  />
</div>
</template>
<script>
import Aplayer from 'vue-aplayer'
import Axios from 'axios';
export default {
    components: {
        Aplayer
    },
    data(){
        return{
            musicList:[],
            isShow:false
        }
    },
    created(){
        let obj = {
            tittle:'音樂',
            className:'music'
        }
        this.$emit('changeNav',obj)
        this.getData()
    },
    methods:{
        getData(){
           Axios.get('./data/musicdata.json')
            .then((res)=>{
                let arr =res.data.musicData;
                arr.forEach((element,index) => {
                arr[index].lrc = location.origin+location.pathname+element.lrc;
                });
                this.musicList=arr;
                this.isShow= true;
            })
        }
    }
}
</script>