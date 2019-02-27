<template>
    <div>
        <span>{{}}</span>
        <div class="button-right">
            <a-button type="primary" icon="left" @click="deleteSql">返回</a-button>
            <a-button type="primary" icon="file-add" @click="addSql">保存</a-button>
            <a-button v-if="" type="primary" icon="copy" @click="showDownloadModal">新增子项目</a-button>
        </div>
        <a-divider type="horizontal" />
    </div>
</template>

<script>
export default{
  name: 'AddSql',
  props: {
    updateData: {}
  },
  data() {
    return {
       title, 
    }
  },
  methods() {
    
  }
}
</script>

<style lang="less" scoped>
    .button-right {
        float: right;
    }
</style>