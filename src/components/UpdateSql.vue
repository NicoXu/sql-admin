<template>
  <div>
    <a-layout-content :style="{ background: '#fff',padding: 0 }">
      <div class="addMoudle">
        <span>编辑脚本</span>
        <div class="button-right">
          <a-button type="primary" icon="left" @click="backSql">返回</a-button>
          <a-button type="primary" icon="file-add" @click="saveSql">保存</a-button>
        </div>
        <a-divider type="horizontal" />
         <a-card>
    <a-form layout="horizontal" :form="form" :autoFormCreate="(form) => this.form = form" @submit="saveSql">
      <a-row>
        <a-col :md="8" :sm="24">
          <a-form-item label="版本号" fieldDecoratorId="version" :labelCol="{span: 5}" :wrapperCol="{span: 18, offset: 1}">
            <a-input/>
          </a-form-item>
        </a-col>
        <a-col :md="8" :sm="24">
          <a-form-item label="脚本类型" fieldDecoratorId="type" :labelCol="{span: 5}" :wrapperCol="{span: 18, offset: 1}">
            <a-select>
                <a-select-option value="CONFIG_DML">配置数据变更</a-select-option>
                <a-select-option value="BUS_DML">业务数据变更</a-select-option>
                <a-select-option value="CONFIG_DDL">结构变更</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :md="8" :sm="24">
          <a-form-item label="作者" fieldDecoratorId="author" :labelCol="{span: 5}" :wrapperCol="{span: 18, offset: 1}">
            <a-select>
              <a-select-option value="xule">徐乐</a-select-option>
              <a-select-option value="zhaokaining">赵凯宁</a-select-option>
              <a-select-option value="wuzelin">吴泽林</a-select-option>
              <a-select-option value="xiedong">谢栋</a-select-option>
              <a-select-option value="shaorongjun">邵荣俊</a-select-option>
              <a-select-option value="zhuhaocheng">朱浩成</a-select-option>
              <a-select-option value="zangyanyan">臧延岩</a-select-option>
              <a-select-option value="fengjianlong">冯建龙</a-select-option>
              <a-select-option value="zhangxinbiao">张新标</a-select-option>
              <a-select-option value="wangxuan">王炫</a-select-option>
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
        <a-col :md="8" :sm="24">
          <a-form-item label="需求号" fieldDecoratorId="requirementNumber" :labelCol="{span: 5}" :wrapperCol="{span: 18, offset: 1}">
            <a-input/>
          </a-form-item>
        </a-col>
        <a-col :md="8" :sm="24">
          <a-form-item label="使用环境" fieldDecoratorId="environment" :labelCol="{span: 5}" :wrapperCol="{span: 18, offset: 1}">
            <a-select>
              <a-select-option value="DEV">开发环境</a-select-option>
              <a-select-option value="SIT">测试环境</a-select-option>
              <a-select-option value="FT">FT环境</a-select-option>
              <a-select-option value="PRODUCT">生产环境</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <!-- <a-col :md="8" :sm="24">
          <a-form-item label="有效" :labelCol="{span: 5}" :wrapperCol="{span: 18, offset: 1}">
            <a-select defaultValue="1">
              <a-select-option value="1">有效</a-select-option>
              <a-select-option value="2">无效</a-select-option>
            </a-select>
          </a-form-item>
        </a-col> -->
        <a-col :md="8" :sm="24">
          <a-form-item label="备注" fieldDecoratorId="comment" :labelCol="{span: 5}" :wrapperCol="{span: 18, offset: 1}">
            <a-input/>
          </a-form-item>
        </a-col>
        <a-col :md="8" :sm="24">
          <a-form-item label="正向脚本" fieldDecoratorId="sqlText" :labelCol="{span: 5}" :wrapperCol="{span: 18, offset: 1}">
            <a-textarea rows='3' />
          </a-form-item>
        </a-col>
        <div style="margin: 165px 0" />
        <a-col :md="8" :sm="24">
          <a-form-item label="逆向脚本" fieldDecoratorId="sqlTextBack" :labelCol="{span: 5}" :wrapperCol="{span: 18, offset: 1}">
            <a-textarea rows='3' />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-card>
      </div>
      <div style="padding: 20px 0" />
    </a-layout-content>
  </div>
</template>

<script>
import SqlCard from '../components/SqlCard';
export default{
  name: 'UpdateSql',
  components: {SqlCard},
  props: {
    updateData: Object
  },
  data() {
    return {

    }
  },
  methods: {
    backSql() {
      this.$router.go(-1)
    },
    getSql() {
      var sqlId = this.$route.params.id;
      var url = this.HOME + '/selectTblSqlById';
      this.form.setFieldsValue({['version']: ""});
      this.form.setFieldsValue({['type']: ""});
      this.form.setFieldsValue({['author']: ""});
      this.form.setFieldsValue({['requirementNumber']: ""});
      this.form.setFieldsValue({['environment']: ""});
      this.form.setFieldsValue({['comment']: ""});
      this.form.setFieldsValue({['sqlText']: ""});
      this.form.setFieldsValue({['sqlTextBack']: ""});
      this.$axios({
        method: "post",
        url: url,
        data: {
          id: sqlId
        }
    }).then(res => {
        var resData = res.data;
        if (resData.resultCode) {
            console.log("版本号:" + resData.resultData.version);
            this.form.setFieldsValue({['version']: resData.resultData.version});
            this.form.setFieldsValue({['type']: resData.resultData.type});
            this.form.setFieldsValue({['author']: resData.resultData.author});
            this.form.setFieldsValue({['requirementNumber']: resData.resultData.requirementNumber});
            this.form.setFieldsValue({['environment']: resData.resultData.environment});
            this.form.setFieldsValue({['comment']: resData.resultData.comment});
            this.form.setFieldsValue({['sqlText']: resData.resultData.sqlText});
            this.form.setFieldsValue({['sqlTextBack']: resData.resultData.sqlTextBack});
        }
        
        //dev
        // if (resData.success) {
        //     console.log("版本号:" + resData.data.version);
        //     this.form.setFieldsValue({['version']: resData.data.version});
        //     this.form.setFieldsValue({['type']: resData.data.type});
        //     this.form.setFieldsValue({['author']: resData.data.author});
        //     this.form.setFieldsValue({['requirementNumber']: resData.data.requirementNumber});
        //     this.form.setFieldsValue({['environment']: resData.data.environment});
        //     this.form.setFieldsValue({['comment']: resData.data.comment});
        //     this.form.setFieldsValue({['sqlText']: resData.data.sqlText});
        //     this.form.setFieldsValue({['sqlTextBack']: resData.data.sqlTextBack});
        // }
      });
    },
    saveSql() {
      // var url = this.HOME + '/updateSql';
      var url = this.HOME + '/updateTblSql';
      this.$axios({
        method: "post",
        url: url,
        data: {
            id: this.$route.params.id,
            version: this.form.getFieldValue('version'),
            author: this.form.getFieldValue('author'),
            type: this.form.getFieldValue('type'),
            environment: this.form.getFieldValue('environment'),
            // isValid: this.form.getFieldValue('isValid'),
            requirementNumber: this.form.getFieldValue('requirementNumber'),
            comment: this.form.getFieldValue('comment'),
            sqlText: this.form.getFieldValue('sqlText'),
            sqlTextBack: this.form.getFieldValue('sqlTextBack')
        }
      }).then(res => {
        var resData = res.data;
        if (resData.resultCode) {
          this.$router.replace("/querySql");
        }
      });
    }
  },
  // mounted() {
  //   this.getSql();
  // },
  activated() {
    this.getSql();
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