<template>
  <div id="login">
    <div class="form x-ctr">
      <el-form :model="form">
        <el-form-item label="用户名或邮箱">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">登录</el-button>
          <el-button @click="register" style="float: right">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from "services/user";
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    async submit() {
      try {
        let res = await login(this.form);
        this.$store.dispatch("setUser", res.user);
        this.$router.push("/");
      } catch (e) {
        console.log(e);
      }
    },
    register() {
      this.$router.push("/register");
    }
  }
};
</script>

<style>
#login {
  width: 100vw;
  height: 100vh;
}

.form {
  width: 40%;
  min-width: 300px;
  padding: 20px;
}
</style>
