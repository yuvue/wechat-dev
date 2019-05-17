<template>
  <div id="register">
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
  </div>
</template>

<script>
export default {
  name: "index",
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
