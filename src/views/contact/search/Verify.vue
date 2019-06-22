<template>
  <div>
    <BaseHeader text="朋友验证">
      <template slot="left">
        <i class="el-icon-arrow-left" @click="$router.back()"></i>
      </template>
      <template slot="right">
        <el-button type="primary" size="small" @click="add">发送</el-button>
      </template>
    </BaseHeader>
    <main class="main-top">
      <p>你需要发送验证申请，等待对方通过</p>
      <el-input v-model="verifyText"></el-input>
    </main>
  </div>
</template>

<script>
import BaseHeader from 'c/app/BaseHeader'
import { addContact } from '@/services/contact'

export default {
  name: 'Verify',
  data() {
    return {
      verifyText: '你好，我是',
    }
  },
  components: {
    BaseHeader,
  },
  methods: {
    async add() {
      let id = this.$route.params.id
      let verifyText = this.verifyText
      let { user } = await addContact({ id, verifyText })
      if (user) {
        this.$store.commit('ADD_CONTACT', user)
        this.$router.push('/contact')
      }
    },
  },
}
</script>

<style scoped lang="less">
.main-top {
  p {
    font-size: 1.2rem;
    padding: 8px 20px;
  }
}
</style>
