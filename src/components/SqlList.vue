<template>
  <div>
    <div style="margin-bottom: 16px">
      <div class="components-input-demo-size">
        <a-form class="ant-advanced-search-form" :form="form" :autoFormCreate="(form) => this.form = form" @submit="query">
          <a-row>
            <a-col :md="8" :sm="24">
              <a-form-item fieldDecoratorId="version" label="版本号" :labelCol="{span: 5}" :wrapperCol="{span: 18, offset: 1}">
                <a-input/>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item fieldDecoratorId="requirementNumber" label="需求号" :labelCol="{span: 5}" :wrapperCol="{span: 18, offset: 1}">
                <a-input/>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item fieldDecoratorId="author" label="作者" :labelCol="{span: 5}" :wrapperCol="{span: 18, offset: 1}">
                <a-select>
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
                  <a-select-option value="yanwang">颜旺</a-select-option>
                  <a-select-option value="limeng">李蒙</a-select-option>
                  <a-select-option value="yuansili">袁思丽</a-select-option>
                  <a-select-option value="wangxiaojuan">王晓娟</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :md="8" :sm="24">
              <a-form-item fieldDecoratorId="type" label="脚本类型" :labelCol="{span: 5}" :wrapperCol="{span: 18, offset: 1}">
                <a-select>
                  <a-select-option value="CONFIG_DML">配置数据变更</a-select-option>
                  <a-select-option value="BUS_DML">业务数据变更</a-select-option>
                  <a-select-option value="CONFIG_DDL">结构变更</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item fieldDecoratorId="environment" label="使用环境" :labelCol="{span: 5}" :wrapperCol="{span: 18, offset: 1}">
                <a-select>
                  <a-select-option value="DEV">开发环境</a-select-option>
                  <a-select-option value="SIT">测试环境</a-select-option>
                  <a-select-option value="FT">FT环境</a-select-option>
                  <a-select-option value="PRODUCT">生产环境</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item fieldDecoratorId="isValid" label="有效" :labelCol="{span: 5}" :wrapperCol="{span: 18, offset: 1}">
                <a-select defaultValue="1">
                  <a-select-option value="1">有效</a-select-option>
                  <a-select-option value="2">无效</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </div>

      <a-button type="primary" icon="search" html-type="submit" @click="query">查询</a-button>
      <a-button icon="edit" :disabled="updateBtnDisabled" @click="updateSql">修改</a-button>
      <a-button type="danger" :disabled="deleteBtnDisabled" icon="delete" @click="deleteSql">删除</a-button>
      <a-button type="primary" icon="file-add" @click="addSql">新增</a-button>
      <a-button icon="download" @click="showDownloadModal">下载</a-button>
    </div>
    <a-table :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}" :columns="columns" :dataSource="tblSqlList">
      <a slot="sqlDetail" slot-scope="text" href="javascript:;" @click="showSqlDetail(text)">{{text}}</a>
    </a-table>

    <!--下载模态框-->
    <div>
      <a-modal title="下载提测脚本" :visible="downloadVisible" @ok="handleDownloadOk" @cancel="handleDownloadModalCancel" okText="确认"
        cancelText="取消">
        <a-form layout="vertical">
          <a-row>
            <a-col :xs="12" :sm="24">
              <a-form-item label="版本号" :labelCol="{span: 3}" :wrapperCol="{span: 14, offset: 1}" fieldDecoratorId="version" :fieldDecoratorOptions="{rules: [{ required: true, message: '版本号不能为空', whitespace: true}]}">
                <a-input/>
              </a-form-item>
            </a-col>
            <a-col :xs="12" :sm="24">
              <a-form-item label="使用环境" :labelCol="{span: 3}" :wrapperCol="{span: 14, offset: 1}">
                <a-select>
                  <a-select-option value="DEV">开发环境</a-select-option>
                  <a-select-option value="SIT">测试环境</a-select-option>
                  <a-select-option value="FT">FT环境</a-select-option>
                  <a-select-option value="PRODUCT">生产环境</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </a-modal>
    </div>

    <!--删除模态框-->
    <div>
      <a-modal title="删除所选脚本" :visible="deleteVisible" @ok="handleDeleteOk" @cancel="handleDeleteModalCancel" okText="确认" cancelText="取消">
        <p style="color:red,font-weight:bold">确认删除所选脚本？</p>
      </a-modal>
    </div>

    <!--当前脚本模态框-->
    <div>
      <a-modal :title="sqlName" :visible="sqlDetailVisible" :closable="false" @ok="handleSqlDetailOk" @cancel="handleSqlDetailOk"
        okText="知道了" cancelText="取消">
        <span style="font-weight:bold">正向脚本:</span>
        <p style="color:red">{{sqlText}}</p>
        <span style="font-weight:bold">逆向脚本:</span>
        <p>{{sqlTextBack}}</p>
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
    dataIndex: "sqlDetail",
    scopedSlots: { customRender: "sqlDetail" }
  },
  {
    title: "环境",
    dataIndex: "environment"
  },
  {
    title: "有效",
    dataIndex: "isValid"
  },
  {
    title: "作者",
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

// const data = [];
// for (let i = 0; i < 46; i++) {
//   data.push({
//     key: i,
//     version: `20180222 ${i}`,
//     requirementNumber: `REQ7412399 ${i}`,
//     type: `CONFIG_DML ${i}`,
//     enviroment: "sit",
//     isValid: "1",
//     author: "XULE",
//     comment: "这是测试，sql脚本都是乱写的",
//     createDate: "2019-02-14 10:52:00",
//     updateDate: "2019-02-14 10:52:00"
//   });
// }
export default {
  name: "SqlList",
  props: {
    sqlLists: Array
  },
  data() {
    return {
      tblSqlList: [],
      columns,
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      deleteVisible: false,
      downloadVisible: false,
      updateBtnDisabled: true,
      deleteBtnDisabled: true,
      sqlDetailVisible: false,
      sqlName: "",
      sqlText: "",
      sqlTextBack: ""
    };
  },
  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0;
    },
  },
  activated() {
    this.getSqlList();
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
      //选中的数据总数为1时才能修改
      if (selectedRowKeys.length === 1) {
        this.updateBtnDisabled = false;
      } else {
        this.updateBtnDisabled = true;
      }
      //选中的数据总数>0时才能删除
      if (selectedRowKeys.length > 0) {
        this.deleteBtnDisabled = false;
      } else {
        this.deleteBtnDisabled = true;
      }
      this.selectedRowKeys = selectedRowKeys;
    },
    getSqlList() {
      var url = this.HOME + "/selectTblSql";
      this.$axios({
        method: "post",
        url: url,
        data: {
          version: this.form.getFieldValue("version"),
          author: this.form.getFieldValue("author"),
          type: this.form.getFieldValue("type"),
          environment: this.form.getFieldValue("environment"),
          isValid: this.form.getFieldValue("isValid"),
          requirementNumber: this.form.getFieldValue("requirementNumber")
        }
      }).then(res => {
        this.tblSqlList = [];
        console.log(res);
        var resData = res.data;
        if (resData.resultCode) {
          this.selectedRowKeys = [];
          this.updateBtnDisabled = true;
          this.deleteBtnDisabled = true;
          for (var i=0; i<resData.resultData.length; i++) {
             resData.resultData[i].key = resData.resultData[i].id;
             resData.resultData[i].sqlDetail = resData.resultData[i].id;
             this.tblSqlList.push(resData.resultData[i]);
          }
          this.$message.success("查询脚本数据成功");
           console.log("this.tblSqlList:"+ this.tblSqlList);
        } else {
          this.$message.success("查询脚本数据失败");
        }
      });
    },
    query(e) {
      e.preventDefault();
      this.getSqlList();
    },
    addSql() {
      this.$router.push("/addSql");
    },
    updateSql() {
      console.log(this.selectedRowKeys);
      var sqlId = this.selectedRowKeys[0];
      this.$router.push(`/updateSql/${sqlId}`);
    },
    showSqlDetail(key) {
      for (var i = 0; i < this.tblSqlList.length; i++) {
        if (key === this.tblSqlList[i].id) {
          this.sqlName = this.tblSqlList[i].version + "版本的" + this.tblSqlList[i].type + "脚本";
          this.sqlText = this.tblSqlList[i].sqlText;
          this.sqlTextBack = this.tblSqlList[i].sqlTextBack;
          break;
        }
      }
      this.sqlDetailVisible = true;
    },
    deleteSql() {
      this.deleteVisible = true;
    },
    handleDeleteOk() {
      this.deleteVisible = false;
    },
    handleDeleteModalCancel() {
      this.deleteVisible = false;
    },
    showDownloadModal() {
      this.downloadVisible = true;
    },
    handleDownloadModalCancel() {
      this.downloadVisible = false;
    },
    handleSqlDetailOk() {
      this.sqlDetailVisible = false;
    },
    handleDownloadOk() {
      this.downloadVisible = false;
    }
  }
};
</script>

<style lang="less" scoped>
  .components-input-demo-size .ant-input {
    margin: 0 8px 8px 0;
  }
  
  .ant-advanced-search-form .ant-form-item {
    display: flex;
  }
</style>