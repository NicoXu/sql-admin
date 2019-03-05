<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout-sider
      breakpoint="lg"
      collapsedWidth="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="header">
        <img alt="logo" class="logo" src="static/img/vue-antd-logo.png">
        <span class="title">SQL-ADMIN</span>
      </div>
      <div style="margin-top:30px">
        <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['4']">
          <a-menu-item key="1">
            <a-icon type="setting"/>
            <span class="nav-text">脚本管理</span>
          </a-menu-item>
        </a-menu>
      </div>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }"/>
      <a-layout-content :style="{ margin: '24px 16px 0' }">
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
    addSqlCallBack(data) {
      this.isSelect = data.isSelect;
      this.updateData = data;
    },
    updateSqlCallBack(data) {
      this.isSelect = data.isSelect;
      this.updateData = data;
    },
    editSqlCallBack(isSelect) {
      this.isSelect = isSelect;
    },
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
    defaultActive() {
      // this.$route.path.replace("/", "/querySql");
      this.$router.push("/querySql");
    }
  },
  mounted() {
    // this.getSqlList()
    // this.addSqlCallBack(data);
    // this.updateSqlCallBack(data);
    // this.editSqlCallBack(data);
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
