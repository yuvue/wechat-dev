<template>
  <div>
    <BaseHeader text="我的收藏">
      <template slot="left">
        <i class="el-icon-arrow-left" @click="$router.back()"></i>
      </template>
    </BaseHeader>
    <main class="main-top main-bottom">
      <Card v-for="moment in moments" :key="moment._id" :moment="moment" />
    </main>
  </div>
</template>

<script>
import BaseHeader from "c/app/BaseHeader";
import Card from "c/MomentCard";

export default {
  name: "MomentFriend",
  components: {
    BaseHeader,
    Card
  },
  data() {
    return {
      user_id: this.$store.getters.user._id
    };
  },
  computed: {
    moments() {
      return this.$store.getters.collectMoments(this.user_id);
    }
  }
};
</script>

<style scoped lang="less"></style>
