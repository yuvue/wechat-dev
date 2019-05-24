<template>
  <div>
    <BaseHeader text="我"> </BaseHeader>
    <main class="main-top main-bottom">
      <MeCard
        @clickMeCard="$router.push('/me/edit')"
        :nickname="user.nickname"
        :email="user.email"
        :avatar="user.avatar"
      >
        <template slot="icon">
          <i class="el-icon-arrow-right"></i>
        </template>
      </MeCard>
      <MenuPanel @menuClick="$router.push('/moment/friend')" class="mt-20">
        <template slot="name">
          <div>朋友圈</div>
        </template>
        <template slot="info">
          <i class="el-icon-arrow-right"></i>
        </template>
      </MenuPanel>
      <MenuPanel @menuClick="$router.push('/moment/collect')">
        <template slot="name">
          <div>收藏</div>
        </template>
        <template slot="info">
          <i class="el-icon-arrow-right"></i>
        </template>
      </MenuPanel>
      <div class="panel t-c mt-60" @click="$router.push('/login')">
        退出登录
      </div>
    </main>
    <BaseFooter></BaseFooter>
  </div>
</template>

<script>
import BaseHeader from "c/app/BaseHeader";
import BaseFooter from "c/app/BaseFooter";
import MenuPanel from "c/app/MenuPanel";
import MeCard from "c/me/MeCard";
import { mapState } from "vuex";

export default {
  name: "Me",
  components: {
    MeCard,
    BaseFooter,
    BaseHeader,
    MenuPanel
  },
  computed: {
    ...mapState({
      user: state => state.user.user
    })
  }
};
</script>

<style scoped lang="less"></style>
