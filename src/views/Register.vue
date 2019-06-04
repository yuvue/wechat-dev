<template>
  <div id="register" class="h-100">
    <BaseHeader text="用户注册">
      <template slot="left">
        <i class="el-icon-arrow-left" @click="$router.back()"></i>
      </template>
      <template slot="right">
        <el-button type="primary" @click="register" size="small"
          >注册</el-button
        >
      </template>
    </BaseHeader>
    <main class="main-top">
      <div class="form x-ctr">
        <el-form :model="form">
          <el-form-item label="用户名">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="form.email"></el-input>
            <el-button
              size="small"
              @click="sendVerifyCode"
              :disabled="btn_text !== '发送验证码'"
              >{{ btn_text }}</el-button
            >
          </el-form-item>
          <el-form-item label="验证码">
            <el-input v-model="form.code"></el-input>
          </el-form-item>
          <el-form-item label="设置密码">
            <el-input v-model="form.password" show-password></el-input>
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input v-model="form.password" show-password></el-input>
          </el-form-item>
        </el-form>
      </div>
    </main>
  </div>
</template>

<script>
import BaseHeader from 'c/app/BaseHeader'
export default {
  name: 'index',
  components: { BaseHeader },
  data() {
    return {
      form: {
        username: '',
        email: '',
        code: '',
        password: '',
      },
      btn_text: '发送验证码',
      disabled: false,
    }
  },
  methods: {
    sendVerifyCode() {
      this.disabled = true
      let sec = 120
      let interval = setInterval(() => {
        this.btn_text = `离有效期还剩${sec}秒`
        if (sec <= 0) {
          clearInterval(interval)
          this.btn_text = '发送验证码'
        }
        sec--
      }, 1000)
    },
    register() {
      //
    },
  },
}
</script>

<style>
#register {
  height: 100%;
}
.form {
  width: 90%;
  padding: 3vh 10vw;
}
</style>
