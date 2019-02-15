<template>
  <h1>聊天</h1>
</template>
<script>
export default {
  created() {
    let obj = {
      tittle: "聊天",
      className: "chat"
    };
    this.$emit("changeNav", obj);
  }
};
</script>
