<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @click="handleSelect"
        >
          <el-menu-item>
            <img src="./assets/logo.png" alt="logo" width="40px">
          </el-menu-item>
          <el-menu-item index="1">
            Dashboard
          </el-menu-item>
          <el-menu-item index="2">
            告警管理
          </el-menu-item>
          <el-menu-item index="3">
            报表分析
          </el-menu-item>
          <el-menu-item index="4">
            日志分析
          </el-menu-item>
          <el-menu-item index="5">
            资产管理
          </el-menu-item>
          <el-menu-item index="6">
            日志审计
          </el-menu-item>
          <el-menu-item index="7">
            <i class="el-icon-bell" style="color: #fff;" />消息
          </el-menu-item>
          <el-menu-item index="8">
            <font-awesome-icon icon="coffee" />sugon
          </el-menu-item>
          <el-menu-item index="9">
            <i class="el-icon-info" style="color: #fff;" />关于
          </el-menu-item>
          <el-menu-item index="10" style="float: right;">
            <router-link to="/login">
              登录
            </router-link>
          </el-menu-item>
          <el-menu-item index="11" style="float: right;">
            <router-link to="/register">
              注册
            </router-link>
          </el-menu-item>
        </el-menu>
      </el-header>

      <el-main>
        <router-view />
      </el-main>

      <el-footer>
        版权所有©2001-2018曙光信息产业股份有限公司津ICP备10200542号
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss">
#app{
  .el-header{
    padding: 0;
  }
  .el-footer{
    text-align: center;
    font-size: 12px;
    line-height: 60px;
  }
}
body {
  margin: 0;
  padding: 0;
  background-color: #eee;
}
.el-form-item .el-form-item__content{
  margin: 0 auto;
}
</style>
