<template>
  <div>
    <Header text="个人信息">
      <template slot="header-left">
        <el-button type="default" @click="() => this.$emit('onCancel')"
          >取消</el-button
        >
      </template>
      <template slot="header-right">
        <el-button type="primary" @click="submit">完成</el-button>
      </template>
    </Header>
    <main class="main-top">
      <div class="c-1">
        <Panel>
          <template slot="panel-name">
            <div>头像</div>
          </template>
          <template slot="panel-info">
            <img
              :src="user.avatar"
              alt=""
              style="margin-right: 20px"
              ref="img"
            />
            <el-upload
              class="upload-demo"
              action="/api/upload"
              :on-success="handleSuccess"
              list-type="picture"
            >
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
            <!--<input type="file" ref="file" @change="upload" />-->
            <!--<el-button size="small" type="primary">点击上传</el-button>-->
          </template>
        </Panel>

        <Panel>
          <template slot="panel-name">
            <div>名字</div>
          </template>
          <template slot="panel-info">
            <el-input v-model="user.nickname"></el-input>
          </template>
        </Panel>

        <Panel>
          <template slot="panel-name">
            <div>微信号</div>
          </template>
          <template slot="panel-info">
            <el-input v-model="user.email"></el-input>
          </template>
        </Panel>

        <Panel>
          <template slot="panel-name">
            <div>地区</div>
          </template>
          <template slot="panel-info">
            <el-input v-model="user.address"></el-input>
          </template>
        </Panel>

        <Panel>
          <template slot="panel-name">
            <div>个性签名</div>
          </template>
          <template slot="panel-info">
            <el-input v-model="user.signature"></el-input>
          </template>
        </Panel>
      </div>
    </main>
  </div>
</template>

<script>
import Panel from "component/Panel";
import Header from "component/Header";
export default {
  name: "InfoEdit",
  props: ["user", "onSubmit", "onCancel"],
  data() {
    return {
      fileList: []
    };
  },
  components: {
    Panel,
    Header
  },
  methods: {
    submit() {
      this.$emit("onSubmit");
    },
    handleSuccess(res) {
      this.$refs.img.src = res.src;
      this.$store.dispatch("updateAvatar", res.src);
    }
  }
};
</script>

<style lang="less" scoped>
img {
  .img-60;
}
.el-button {
  padding: 8px 18px;
}

input[type="file"] {
  width: 86px;
  height: 30px;
  position: absolute;
  right: 30px;
  opacity: 0;
}
@media (min-width: 800px) {
  .c-1 {
    width: 600px;
    top: 20vh;
    .x-ctr;
  }
}
</style>
