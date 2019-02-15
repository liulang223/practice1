<template>
<h1>
书籍
</h1>
</template>
<script>
export default {
    created(){
        let obj = {
            tittle:'書籍',
            className:'book'
        }
        this.$emit('changeNav',obj)
    }
}
</script>

