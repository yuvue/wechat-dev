<template>
  <div>
    <BaseHeader text="查找好友">
      <template slot="left">
        <i class="el-icon-arrow-left" @click="$router.back()"></i>
      </template>
    </BaseHeader>
    <main class="main-top main-bottom">
      <section class="search">
        <el-input v-model="email"></el-input>
        <el-button type="primary" @click="search">搜索</el-button>
      </section>
      <section v-show="user.email">
        <MeCard
          :nickname="user.nickname"
          :email="user.email"
          :avatar="user.avatar"
          class="mt-20"
        ></MeCard>
        <section class="mt-40">
          <ButtonPanel text="添加好友" @panelClick="addFriend"></ButtonPanel>
        </section>
      </section>
    </main>
  </div>
</template>

<script>
import BaseHeader from 'c/app/BaseHeader'
import MeCard from 'c/me/MeCard'
import ButtonPanel from 'c/app/ButtonPanel'
import { searchUser } from '@/services/user'

export default {
  name: 'Search',
  data() {
    return {
      email: 'chenhuan@163.com',
      user: {
        email: '',
        nickname: '',
        avatar: '',
      },
    }
  },
  components: {
    BaseHeader,
    MeCard,
    ButtonPanel,
  },
  methods: {
    async search() {
      let email = this.email
      let { user, code } = await searchUser({ email })
      code === 0 && (this.user = user)
    },
    addFriend() {
      this.$router.push({
        name: 'contactSearchVerify',
        params: {
          id: this.user._id,
        },
      })
    },
  },
}
</script>

<style lang="less" scoped>
.search {
  display: flex;
  justify-items: center;

  .el-input {
    flex-grow: 1;
  }
}
main > section:not(:first-child) {
  margin: 10px 0;
}
</style>
