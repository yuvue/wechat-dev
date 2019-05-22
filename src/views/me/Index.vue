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
      <div
        style="margin-top: 30px"
        class="panel t-c"
        @click="$router.push('/login')"
      >
        退出登录
      </div>

      <div style="margin-top: 30px" class="panel t-c" @click="test">
        连接socket
      </div>
    </main>
    <BaseFooter></BaseFooter>
  </div>
</template>

<script>
import BaseHeader from "c/app/BaseHeader";
import BaseFooter from "c/app/BaseFooter";
import MeCard from "c/me/MeCard";
import { mapState } from "vuex";

export default {
  name: "Me",
  components: {
    MeCard,
    BaseFooter,
    BaseHeader
  },
  computed: {
    ...mapState({
      user: state => state.user.user
    })
  },
  methods: {
    test() {
      this.$store.dispatch("startSocket");
    }
  }
};
</script>

<style scoped lang="less"></style>
