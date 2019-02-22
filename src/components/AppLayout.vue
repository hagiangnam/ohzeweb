<template>
  <el-container flex="true" style="width: 100%">
    <Header></Header>
    <router-view></router-view>
  </el-container>

</template>

<script>
  import Header from "./navigation/Header"

  export default {
    name: "AppLayout",
    components: {Header}
  }
</script>

<style scoped>

</style>
