<template>
  <div id="register">
    <BaseHeader text="注册"> </BaseHeader>
    <main class="main-top">
      <div class="form">
        <el-form :model="form">
          <el-form-item label="用户名">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="验证码">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="设置密码">
            <el-input v-model="form.password" show-password></el-input>
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input v-model="form.password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="register" class="btn-center"
              >注册</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </main>
  </div>
</template>

<script>
import BaseHeader from "c/app/BaseHeader";
export default {
  name: "index",
  metaInfo: {
    title: "register",
    titleTemplate: "%s - Lavas",
    meta: [
      { name: "keywords", content: "lavas PWA" },
      {
        name: "description",
        content:
          "基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"
      }
    ]
  },
  components: { BaseHeader },
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  }
};
</script>

<style>
#register {
  width: 100vw;
  height: 100vh;
}
.form {
  min-width: 300px;
  padding: 3vh 10vw;
}
</style>
