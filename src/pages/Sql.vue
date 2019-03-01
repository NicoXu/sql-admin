<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout-sider
      breakpoint="lg"
      collapsedWidth="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="logo"/>
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['4']">
        <a-menu-item key="1">
          <a-icon type="setting"/>
          <span class="nav-text">脚本管理</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }"/>
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '900px' }">
          <sql-list :sqlLists='sqlLists' @addSqlCallBack='addSqlCallBack' @updateSqlCallBack='updateSqlCallBack' v-if='isSelect'/>
          <add-sql :updateData='updateData' @editSqlCallBack='editSqlCallBack' v-if='!isSelect'/>
        </div>
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
      updateData: {},
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
    }
  },
  mounted() {
    // this.getSqlList()
    this.addSqlCallBack(data);
    this.updateSqlCallBack(data);
    this.editSqlCallBack(data);
  },
};
</script>

<style>
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
