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
    <a-form layout="horizontal">
      <a-row>
        <a-col :md="8" :sm="24">
          <a-form-item label="版本号" :labelCol="{span: 5}" :wrapperCol="{span: 18, offset: 1}">
            <a-input/>
          </a-form-item>
        </a-col>
        <a-col :md="8" :sm="24">
          <a-form-item label="脚本类型" :labelCol="{span: 5}" :wrapperCol="{span: 18, offset: 1}">
            <a-select>
              <a-select-option value="DEV">配置数据变更</a-select-option>
              <a-select-option value="SIT">业务数据变更</a-select-option>
              <a-select-option value="FT">结构变更</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :md="8" :sm="24">
          <a-form-item label="作者" :labelCol="{span: 5}" :wrapperCol="{span: 18, offset: 1}">
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
              <a-select-option value="liupengbo">刘鹏博</a-select-option>
              <a-select-option value="yuansili">袁思丽</a-select-option>
              <a-select-option value="wangxiaojuan">王晓娟</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :md="8" :sm="24">
          <a-form-item label="需求号" :labelCol="{span: 5}" :wrapperCol="{span: 18, offset: 1}">
            <a-input/>
          </a-form-item>
        </a-col>
        <a-col :md="8" :sm="24">
          <a-form-item label="使用环境" :labelCol="{span: 5}" :wrapperCol="{span: 18, offset: 1}">
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
          <a-form-item label="备注" :labelCol="{span: 5}" :wrapperCol="{span: 18, offset: 1}">
            <a-input/>
          </a-form-item>
        </a-col>
        <a-col :md="8" :sm="24">
          <a-form-item label="正向脚本" :labelCol="{span: 5}" :wrapperCol="{span: 18, offset: 1}">
            <a-textarea rows='3' />
          </a-form-item>
        </a-col>
        <div style="margin: 165px 0" />
        <a-col :md="8" :sm="24">
          <a-form-item label="逆向脚本" :labelCol="{span: 5}" :wrapperCol="{span: 18, offset: 1}">
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
       title, 
    }
  },
  methods: {
    backSql() {
      this.$router.go(-1)
    },
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