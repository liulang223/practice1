<template>
    <el-amap vid="amapDemo" :zoom="zoom" :center="center">
</el-amap>
</template>
<script>
import VueAMap from 'vue-amap';
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  // 高德的key
  key: 'YOUR_KEY',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 高德 sdk 版本，默认为 1.4.4
  v: '1.4.4'
});
export default {
 created(){
        let obj = {
            tittle:'書籍',
            className:'book',
        }
        this.$emit('changeNav',obj)
    },
}
</script>
