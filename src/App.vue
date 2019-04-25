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
          :router="true"
          @select="handleSelect"
        >
          <el-menu-item>
            <img src="./assets/logo.png" alt="logo" width="40px">
          </el-menu-item>
          <el-menu-item index="/dashboard">
            Dashboard
          </el-menu-item>
          <el-menu-item index="/alarm">
            告警管理
          </el-menu-item>
          <el-menu-item index="/report">
            报表分析
          </el-menu-item>
          <el-menu-item index="/log">
            日志分析
          </el-menu-item>
          <el-menu-item index="/assets">
            资产管理
          </el-menu-item>
          <el-menu-item index="/audit">
            日志审计
          </el-menu-item>
          <el-menu-item>
            <i class="el-icon-bell" style="color: #fff;" />消息
          </el-menu-item>
          <el-menu-item index="/personal">
            <font-awesome-icon :icon="['fas','user']" />sugon
          </el-menu-item>
          <el-menu-item index="9">
            <i class="el-icon-info" style="color: #fff;" />关于
          </el-menu-item>
          <el-menu-item index="/login" style="float: right;">
            登录
          </el-menu-item>
          <el-menu-item index="/register" style="float: right;">
            注册
          </el-menu-item>
        </el-menu>
      </el-header>

      <el-header style="height: 30px;">
        <el-menu
          style="height: 30px; font-size: 12px;"
          :default-active="subActiveIndex"
          class="el-menu-demo"
          mode="horizontal"
          background-color="blue"
          text-color="#fff"
          active-text-color="#fff"
          :router="true"
          @select="handleSubSelect"
        >
          <template v-if="activeIndex === '/dashboard'">
            <el-menu-item
              style="height: 30px; line-height: 30px;"
              index="/dashboard/overview"
            >
              监控概览
            </el-menu-item>
            <el-menu-item
              style="height: 30px; line-height: 30px;"
              index="/dashboard/node"
            >
              节点视图
            </el-menu-item>
            <el-menu-item
              style="height: 30px; line-height: 30px;"
              index="/dashboard/problem"
            >
              告警问题
            </el-menu-item>
            <el-menu-item
              style="height: 30px; line-height: 30px;"
              index="/dashboard/statistics"
            >
              告警统计图
            </el-menu-item>
          </template>
          <template v-if="activeIndex === '/alarm'">
            <el-menu-item
              style="height: 30px; line-height: 30px;"
              index="alarm"
            >
              告警规则
            </el-menu-item>
            <el-menu-item
              style="height: 30px; line-height: 30px;"
              index="/alarm/contact"
            >
              告警联系人管理
            </el-menu-item>
          </template>
          <template v-if="activeIndex === '/report'">
            <el-menu-item
              style="height: 30px; line-height: 30px;"
              index="report"
            >
              服务器
            </el-menu-item>
            <el-menu-item
              style="height: 30px; line-height: 30px;"
              index="/report/disk"
            >
              磁盘阵列
            </el-menu-item>
            <el-menu-item
              style="height: 30px; line-height: 30px;"
              index="/report/blade"
            >
              刀片机箱
            </el-menu-item>
            <el-menu-item
              style="height: 30px; line-height: 30px;"
              index="/report/switch"
            >
              交换机
            </el-menu-item>
            <el-menu-item
              style="height: 30px; line-height: 30px;"
              index="/report/series"
            >
              组
            </el-menu-item>
          </template>
          <template v-if="activeIndex === '/assets'">
            <el-menu-item
              style="height: 30px; line-height: 30px;"
              index="assets"
            >
              资产列表
            </el-menu-item>
            <el-menu-item
              style="height: 30px; line-height: 30px;"
              index="model"
            >
              机型管理
            </el-menu-item>
          </template>
          <template v-if="activeIndex === '/personal'">
            <el-menu-item
              style="height: 30px; line-height: 30px;"
              index="personal"
            >
              个人中心
            </el-menu-item>
            <el-menu-item
              style="height: 30px; line-height: 30px;"
              index="message"
            >
              消息设置
            </el-menu-item>
            <el-menu-item
              style="height: 30px; line-height: 30px;"
              index="tools"
            >
              常用工具下载
            </el-menu-item>
          </template>
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
      activeIndex: '/dashboard',
      subActiveIndex: '/dashboard/overview'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.activeIndex = key;
      this.subActiveIndex = key + '/overview';
    },
    handleSubSelect(key, keyPath) {
      this.subActiveIndex = key;
    }
  }
};
</script>

<style lang="scss">
  @import './style/base.scss';
#app{
  .el-header{
    padding: 0;
      .is-active{
        color: #fff;
        /*border: none;*/
        // &:after{
        //   position: absolute;
        //   border-width: 10px;
        //   width: 100px;
        //   height: 100px;
        //   background-color: red;
        //   top: 0;
        //   left: 0;
        //   /*border-left: 10px solid transparent;*/
        //   /*border-right: 10px solid transparent;*/
        //   /*border-bottom: 10px solid red;*/
        // }
      }
  }
  .el-footer{
    text-align: center;
    font-size: 12px;
    line-height: 60px;
  }
}
.el-form-item .el-form-item__content{
  margin: 0 auto;
}
</style>
