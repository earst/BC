<!-- src/App.vue -->
<script  setup>

</script>

<template>
<RouterView></RouterView>
</template>

<style lang="scss">
/* 审查元素从而设定样式 */
html, body, #app, .common-layout, .el-container {
  height: 100%;
}
.common-layout {
  .el-container {
    background-color: #efefef;
    .el-aside {
      background-color: #001529;
    }
    .el-container {
      .el-header {
        background-color: #fff;
      }
      .el-main {
        background-color: #fff;
        margin: 16px;
      }
      .el-footer {
        background-color: #fff;
      }
    }
  }
}
</style>