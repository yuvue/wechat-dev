<template>
  <div>
    <BaseHeader text="记录中">
      <template slot="left">
        <el-button size="small" @click="$router.back()">取消</el-button>
      </template>
      <template slot="right">
        <el-button size="small" type="primary" @click="submit">发布</el-button>
      </template>
    </BaseHeader>
    <main class="main-top main-bottom">
      <section>
        <el-input
          type="textarea"
          :rows="5"
          placeholder="记录这一刻，晒给最懂你的人..."
          v-model="textarea"
        >
        </el-input>
      </section>
      <section>
        <el-tag
          :key="tag"
          v-for="tag in tags"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)"
        >
          {{ tag }}
        </el-tag>
        <el-input
          class="input-new-tag"
          v-if="inputVisible"
          v-model="inputValue"
          ref="saveTagInput"
          size="small"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm"
        >
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput"
          >添加标签</el-button
        >
      </section>
      <section>
        <Upload ref="upload"></Upload>
      </section>
      <section>
        <Recorder ref="recorder"></Recorder>
      </section>
      <section>
        <el-radio-group v-model="config">
          <el-radio-button label="仅自己可见"></el-radio-button>
          <el-radio-button label="广场可见"></el-radio-button>
          <el-radio-button label="好友可见"></el-radio-button>
        </el-radio-group>
      </section>
    </main>
  </div>
</template>

<script>
import BaseHeader from "c/app/BaseHeader";
import Recorder from "c/Recorder";
import Upload from "c/Upload";
import { _addMoment } from "@/services/moment";

const configData = {
  仅自己可见: -1,
  好友可见: 1,
  广场可见: 2
};

export default {
  name: "addMoment",
  components: {
    BaseHeader,
    Recorder,
    Upload
  },
  data() {
    return {
      textarea: "",
      tags: [],
      inputVisible: false,
      inputValue: "",
      dialogImageUrl: "",
      dialogVisible: false,
      config: "广场可见"
    };
  },
  methods: {
    handleClose(tag) {
      this.tags.splice(this.tags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.tags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    },
    remove(file, fileList) {
      console.log(file, fileList);
    },
    preview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    beforeUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    async submit() {
      let text = this.textarea;
      let tags = this.tags;
      let { audio, seconds } = this.$refs.recorder;
      let pictureList = this.$refs.upload.pictureList;
      let config = configData[this.config];

      let fr = new FormData();
      for (let i = 0; i < pictureList.length; i++) {
        fr.append(`i${i}`, pictureList[i]);
      }
      fr.append("text", text);
      fr.append("tags", tags);
      fr.append("audio", audio);
      fr.append("seconds", seconds);
      fr.append("config", config);
      let res = await _addMoment(fr);
      res && res.data && this.$store.commit("ADD_LIST", res.data);
    }
  }
};
</script>

<style lang="less">
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.button-new-tag:not(:first-child) {
  margin-left: 10px;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
.main-top {
  section:not(:first-child) {
    margin-top: 20px;
  }
}
span.el-radio-button__inner {
  font-size: 1.2rem;
  padding: 9px 14px;
}
</style>
