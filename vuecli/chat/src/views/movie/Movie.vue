<template>
<h1> 
 电影
</h1>
</template>
<script>
export default {
    created(){
        let obj = {
            tittle:'電影',
            className:'movie'
        }
        this.$emit('changeNav',obj)
    }
}
</script>