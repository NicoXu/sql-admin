<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout-sider
      breakpoint="lg"
      collapsedWidth="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['4']">
        <a-menu-item key="1">
          <a-icon type="setting" />
          <span class="nav-text">脚本管理</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '900px' }">
            <sql-list v-if="!isAdd"/>
        </div>
      </a-layout-content>
      <a-layout-footer style="textAlign: center">
        Sql-Admin ©2019 
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import Header from '../components/Header'
import SqlList from '../components/SqlList'
import AddSql from "../components/AddSql"
export default {
    components: {Header},
    components: {SqlList},
    components: {AddSql},
    name: 'Sql',  
    methods: {
        onCollapse(collapsed, type) {
        console.log(collapsed, type);
        },
        onBreakpoint(broken) {
        console.log(broken);
        }
    }
    }
</script>

<style>
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
</style>
