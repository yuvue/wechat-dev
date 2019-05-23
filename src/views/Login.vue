<template>
  <div id="login">
    <BaseHeader text="登录"> </BaseHeader>
    <main class="main-top">
      <div class="form x-ctr">
        <el-form :model="form">
          <el-form-item label="用户名或邮箱">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password" show-password></el-input>
          </el-form-item>
        </el-form>
        <div>
          <el-button type="primary" @click="submit">登录</el-button>
          <el-button @click="$router.push('/register')" class="f-r"
            >注册</el-button
          >
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { login } from "@/services/user";
import BaseHeader from "c/app/BaseHeader";
import Cookies from "universal-cookie";

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
  components: { BaseHeader },
  methods: {
    async submit() {
      try {
        let res = await login(this.form);
        this.$store.dispatch("setUser", res.user);
        this.$store.dispatch("setList", res.contacts);
        this.$router.push("/");
        this.$store.dispatch("connect");
      } catch (e) {
        console.log(e);
      }
    }
  },
  mounted() {
    const cookies = new Cookies();
    cookies.remove("wechat");
    cookies.remove("wechat.sig");
    this.$store.dispatch("close");
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
