<template>
<h1>
音乐
</h1>
</template>
<script>
export default {
    created(){
        let obj = {
            tittle:'音樂',
            className:'music'
        }
        this.$emit('changeNav',obj)
    }
}
</script>