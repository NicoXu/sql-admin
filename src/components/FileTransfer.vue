<template>
  <div>
    <a-card :style="{ margin: '5px 5px 0',minHeight: '500px' }">
      <a-row>
        <a-col :span="12">
          <a-upload :action="uploadUrl" :fileList="fileList" :beforeUpload="beforeUpload" @change="handleChange">
            <a-button>
              <a-icon type="upload" /> 文件上传
            </a-button>
          </a-upload>
        </a-col>
        <a-col :span="12">
          <a-textarea placeholder="请输入。。。" v-model="flushData" @blur="postFlushData" @pressEnter="bufferTransfer" :rows="8" /></a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script>
export default {
  name: "FileTransfer",
  data() {
    return {
      flushData: '',
      uploadUrl: this.HOME + "/uploadFile",
      fileList: [],
    };
  },
  activated() {
    this.getFlushData();
    this.getFileList();
  },
  methods: {
    bufferTransfer(e) {
      
    },
    getFileList() {
      this.fileList = [];
      var url = this.HOME + "/queryFileList";
      this.$axios({
        method: "post",
        url: url
      }).then(res => {
        console.log(res);
        var resData = res.data;
        if (resData.resultCode) {
            if (resData.resultData != null && resData.resultData.length > 0) {
                for (var i= 0; i < resData.resultData.length; i++ ) {
                  var file = {};
                  file.uid = i;
                  file.name = resData.resultData[i];
                  // file.url = 'http://132.230.70.177:8080/downloadFile/?fileName=' + resData.resultData[i];
                  file.url = this.HOME + '/downloadFile/?fileName=' + resData.resultData[i];
                  console.log("file url" + file.url);
                  this.fileList.push(file);
                  console.log("test"+ this.fileList);
              }
            }
        } else {
          this.$message.error("查询文件信息成功");
        }
      });
    },
    postFlushData() {
      var url = this.HOME + "/postClipboard";
      var inputFlushData = this.flushData; 
      this.$axios({
        method: "post",
        url: url,
        data: {
          clipboard: inputFlushData,
        }
      }).then(res => {
        var resData = res.data;
        if (resData.resultCode) {
        } else {
          this.flushData = resData.errorMsg;
        }
      });
    },
    beforeUpload (file) {
      console.log('before upload');
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        this.$message.error('Image must smaller than 2MB!')
      }
      this.$message.error('Image must smaller than 2MB!')
      return isLt2M;
    },
    getFlushData() {
      var url = this.HOME + "/getClipboard";
      this.$axios({
        method: "get",
        url: url,
      }).then(res => {
        var resData = res.data;
        if (resData.resultCode) {
          this.flushData = resData.resultData;
        } else {
          this.flushData = resData.resultMsg;
        }
      });
    },
    handleChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        this.$message.success('file uploaded successfully');
      } else if (info.file.status === 'error') {
        this.$message.error('file uploaded failed');
      }
    },
  }
};
</script>

<style lang="less" scoped>
  .deleteLink {
    display: block;
    float: right;
  }
</style>