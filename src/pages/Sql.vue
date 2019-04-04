<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout-sider breakpoint="lg" collapsedWidth="0" @collapse="onCollapse" @breakpoint="onBreakpoint">
      <div class="header">
        <img alt="logo" class="logo" src="static/img/vue-antd-logo.png">
        <span class="title">SQL-ADMIN</span>
      </div>
      <div style="margin-top:30px">
        <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']" @click="handleMenueClick" :defaultOpenKeys="['sub1']">
          <a-sub-menu key="sub1">
            <span slot="title"><a-icon type="user" /><span>发布管理</span></span>
            <a-menu-item key="1">脚本管理</a-menu-item>
            <a-menu-item key="2">文件传输</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </div>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 20 }">
        <div style="float:right" @click="onUserClick">
          <a-avatar icon="user" style="backgroundColor: #1890ff" />
          <a-dropdown>
            <a class="ant-dropdown-link" href="#">
            admin </a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a href="javascript:;" @click="loginOut">退出登录</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px 0',minHeight: '700px' }">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </a-layout-content>
      <a-layout-footer style="textAlign: center">Sql-Admin ©2019</a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import Header from "../components/Header";
export default {
  components: { Header },
  name: "Sql",
  data() {
    return {
      sqlLists: [],
      isSelect: true,
      updateData: {}
    };
  },
  methods: {
    getSqlList() {
      this.$axios({
        method: "post",
        url: "/selectTblSql"
      }).then(res => {
        if (res.resultCode) {
          this.sqlList = res.tblSqlResponseList;
        }
      });
    },
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {

    },
    loginOut() {
      this.$router.replace("/", "/");
    },
    defaultActive() {
      // this.$route.path.replace("/", "/querySql");
      this.$router.push("/querySql");
    },
    handleMenueClick(e) {
      if (e.key === "1") {
        this.$router.push("/querySql");
      } else {
        this.$router.push("/fileTransfer");
      }
    },
    onUserClick(e) {

    }
  },
  mounted() {
    this.defaultActive();
  }
};
</script>

<style lang="less" scoped>
  .header {
    height: 33px;
    line-height: 33px;
    margin-top: 10%;
    a {
      text-decoration: none;
    }
    .logo {
      height: 33px;
      vertical-align: top;
      margin-right: 0px;
    }
    .title {
      font-size: 22px;
      color: rgba(245, 228, 228, 0.85);
      font-weight: 300;
      position: relative;
      top: 2px;
    }
  }
</style>