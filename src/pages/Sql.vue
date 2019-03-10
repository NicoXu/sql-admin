<template>
  <a-layout id="components-layout-demo-responsive" >
    <a-layout-sider breakpoint="lg" collapsedWidth="0" @collapse="onCollapse" @breakpoint="onBreakpoint">
      <div class="header">
        <img alt="logo" class="logo" src="static/img/vue-antd-logo.png">
        <span class="title">SQL-ADMIN</span>
      </div>
      <div style="margin-top:30px">
        <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['4']">
          <a-sub-menu key="sub1">
            <span slot="title"><a-icon type="user" /><span>发布管理</span></span>
            <a-menu-item key="1">脚本管理</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </div>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content :style="{ margin: '24px 16px 0',minHeight: '900px' }">
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
import SqlList from "../components/SqlList";
import AddSql from "../components/AddSql";
export default {
  components: { Header, SqlList, AddSql },
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
    defaultActive() {
      // this.$route.path.replace("/", "/querySql");
      this.$router.push("/querySql");
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