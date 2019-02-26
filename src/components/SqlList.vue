<template>
  <div>
    <div style="margin-bottom: 16px">
      <div class="components-input-demo-size">
        <a-form class="ant-advanced-search-form" :form="form" @submit="query">
          <a-row>
            <a-col :span="8">
              <a-form-item label="版本号">
                <a-input/>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <a-form-item label="脚本类型">
                <a-select style="width: 200px">
                  <a-select-option value="DEV">配置数据变更</a-select-option>
                  <a-select-option value="SIT">业务数据变更</a-select-option>
                  <a-select-option value="FT">结构变更</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <a-form-item label="作者">
                <a-select style="width: 200px">
                  <a-select-option value="xule">徐乐</a-select-option>
                  <a-select-option value="zhaokaining">赵凯宁</a-select-option>
                  <a-select-option value="wuzelin">吴泽林</a-select-option>
                  <a-select-option value="xiedong">谢栋</a-select-option>
                  <a-select-option value="luqiang">卢强</a-select-option>
                  <a-select-option value="shaorongjun">邵荣俊</a-select-option>
                  <a-select-option value="zhuhaocheng">朱浩成</a-select-option>
                  <a-select-option value="zangyanyan">臧延岩</a-select-option>
                  <a-select-option value="fengjianlong">冯建龙</a-select-option>
                  <a-select-option value="zhangxinbiao">张新标</a-select-option>
                  <a-select-option value="wangxuan">王炫</a-select-option>
                  <a-select-option value="wangdeli">王得利</a-select-option>
                  <a-select-option value="yanwang">颜旺</a-select-option>
                  <a-select-option value="limeng">李蒙</a-select-option>
                  <a-select-option value="liupengbo">刘鹏博</a-select-option>
                  <a-select-option value="yuansili">袁思丽</a-select-option>
                  <a-select-option value="wangxiaojuan">王晓娟</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="8">
              <a-form-item label="需求号">
                <a-input/>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <a-form-item label="使用环境">
                <a-select style="width: 200px">
                  <a-select-option value="DEV">开发环境</a-select-option>
                  <a-select-option value="SIT">测试环境</a-select-option>
                  <a-select-option value="FT">FT环境</a-select-option>
                  <a-select-option value="PRODUCT">生产环境</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <a-form-item label="有效">
                <a-select style="width: 200px" defaultValue="1">
                  <a-select-option value="1">有效</a-select-option>
                  <a-select-option value="2">无效</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </div>

      <a-button type="primary" icon="search" @click="querySql">查询</a-button>
      <a-button icon="edit" @click="updateSql">修改</a-button>
      <a-button type="danger" icon="delete" @click="deleteSql">删除</a-button>
      <a-button type="primary" icon="file-add" @click="addSql">新增</a-button>
      <a-button icon="download" @click="showDownloadModal">下载</a-button>

    </div>
    <a-table :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}" :columns="columns" :dataSource="data"
    />
    <div>
      <!--<a-button type="primary" @click="showModal">Open Modal with async logic</a-button>-->
      <a-modal title="Title" :visible="visible" @ok="handleOk" :confirmLoading="confirmLoading" @cancel="handleCancel">
        <p>{{ModalText}}</p>
      </a-modal>
    </div>
  </div>
</template>

<script>
const columns = [
  {
    title: "版本号",
    dataIndex: "version"
  },
  {
    title: "需求号",
    dataIndex: "requirementNumber"
  },
  {
    title: "脚本类型",
    dataIndex: "type"
  },
  {
    title: "脚本",
    dataIndex: "address"
  },
  {
    title: "环境",
    dataIndex: "enviroment"
  },
  {
    title: '有效',
    dataIndex: "isValid"
  },
  {
    title: '作者',
    dataIndex: "author"
  },
  {
    title: "备注",
    dataIndex: "comment"
  },
  {
    title: "创建时间",
    dataIndex: "createDate"
  },
  {
    title: "更新时间",
    dataIndex: "updateDate"
  }
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    version: `20180222 ${i}`,
    requirementNumber: `REQ7412399 ${i}`,
    type: `CONFIG_DML ${i}`,
    enviroment: 'sit',
    isValid: '1',
    author: 'XULE',
    comment: '这是测试，sql脚本都是乱写的',
    createDate: "2019-02-14 10:52:00",
    updateDate: "2019-02-14 10:52:00"
  });
}
export default {
  name: "SqlList",
  props: {
    sqlLists: Array
  },
  data() {
    return {
      data,
      columns,
      selectedRowKeys: [], // Check here to configure the default column
      loading: false
    };
  },
  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0;
    }
  },
  methods: {
    start() {
      this.loading = true;
      // ajax request after empty completing
      setTimeout(() => {
        this.loading = false;
        this.selectedRowKeys = [];
      }, 1000);
    },
    onSelectChange(selectedRowKeys) {
      console.log("selectedRowKeys changed: ", selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys;
    },
    query() {
      
    },
    addSql() {

    },
    showDownloadModal() {

    },
  }
};
</script>

<style lang="less" scoped>

  .components-input-demo-size .ant-input {
    width: 200px;
    margin: 0 8px 8px 0;
  }
  
  .ant-advanced-search-form .ant-form-item {
    display: flex;
  }
</style>