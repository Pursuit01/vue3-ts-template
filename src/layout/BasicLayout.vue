<template>
  <div class="common-layout">
    <el-container class="container_box">
      <el-header>Header</el-header>
      <el-container class="aside_box">
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<style lang="less" scoped>
.common-layout {
  .container_box {
    display: flex;
    flex-direction: column;
  }
  .el-header {
    background-color: #ccc;
  }
  .aside_box {
    flex: 1;
    .el-aside {
      height: 100%;
      background-color: #eee;
    }
  }
}
</style>
