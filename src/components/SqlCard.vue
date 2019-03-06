<template>
  <a-card>
    <span>第{{index}}条脚本</span>
    <!-- <a-button type="primary" shape="circle" ghost="true" icon="delete" :size="small"/>删除 -->
    <a click="deleteCard" class="deleteLink"><a-icon type="delete" twoToneColor="#eb2f96"/>删除</a>
    <a-divider type="horizontal" />
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
        <a-col :xs="11" :sm="15" style="margin-left:-80px">
          <a-form-item label="正向脚本" :labelCol="{span: 4}" :wrapperCol="{span: 17, offset: 1}">
            <a-textarea rows='3' />
          </a-form-item>
        </a-col>
        <div style="margin: 165px 0" />
        <a-col :xs="11" :sm="15" style="margin-left:-80px">
          <a-form-item label="逆向脚本" :labelCol="{span: 4}" :wrapperCol="{span: 17, offset: 1}">
            <a-textarea rows='3' />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-card>
</template>

<script>
export default {
  name: "SqlCard",
  props: [
   'index'
  ],
  data() {
    return {

    };
  },
  methods: {
    deleteCard() {
      
    }
  }
};
</script>

<style lang="less" scoped>
.deleteLink {
  display: block;
  float: right;
}
</style>