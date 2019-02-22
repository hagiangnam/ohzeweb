<template>
    <el-container style="background-color: red; height: 80px; width: 100%">
        <el-row style="width: 100%" type="flex" align="middle" justify="space-around">
          <el-col :span="6">
            <el-button type="success">Success</el-button>
          </el-col>
          <el-col :span="6">
            <h1>hehe</h1>
          </el-col>
          <el-col :span="6">
            <h1>huhu</h1>
          </el-col>
          <el-col :span="6">
            <h1>cộng hòa xã hội chủ nghãi việt nam</h1>
          </el-col>
        </el-row>
    </el-container>
</template>

<script>

    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
