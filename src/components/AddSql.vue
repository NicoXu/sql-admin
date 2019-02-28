<template>
    <div>
        <span>{{updateData.titleType === 'update' ? '编辑脚本' : '新增脚本'}}</span>
        <div class="button-right">
            <a-button type="primary" icon="left" @click="backSql">返回</a-button>
            <a-button type="primary" icon="file-add" @click="saveSql">保存</a-button>
            <a-button v-if="updateData.titleType !== 'update'" type="primary" icon="copy" @click="addSql">新增子项目</a-button>
        </div>
        <a-divider type="horizontal" />
    </div>
</template>

<script>
export default{
  name: 'AddSql',
  props: {
    updateData: Object
  },
  data() {
    return {
       title, 
    }
  },
  methods: {
    backSql() {
      this.$emit('editSqlCallBack', true);
    },
  }
}
</script>

<style lang="less" scoped>
    .button-right {
        float: right;
    }
</style>