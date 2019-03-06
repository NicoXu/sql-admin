<template>
  <div>
    <!--<a-layout-header :style="{ background: '#fff', padding: 0 }"/>-->
    <a-layout-content :style="{ background: '#fff',padding: 0 }">
      <div class="addMoudle">
        <span>新增脚本</span>
        <div class="button-right">
          <a-button type="primary" icon="left" @click="backSql">返回</a-button>
          <a-button type="primary" icon="file-add" @click="saveSql">保存</a-button>
          <a-button type="primary" icon="copy" @click="addSql">新增子项目</a-button>
        </div>
        <a-divider type="horizontal" />
        <div v-for="item in items" :key="item.id">
            <sql-card :index='item'/>
        </div>
      </div>
    </a-layout-content>
  </div>
</template>

<script>
import SqlCard from '../components/SqlCard';
export default{
  name: 'AddSql',
  components: {SqlCard},
  data() {
    return {
       items: 1,
    }
  },
  methods: {
    backSql() {
      this.$router.go(-1)
    },
    addSql() {
      this.items++;
    },
    saveSql() {

    }
  }
}
</script>

<style lang="less" scoped>
  .button-right {
    float: right;
  }
  .addMoudle {
    padding: 10px 20px 0px 20px; 
  }
</style>