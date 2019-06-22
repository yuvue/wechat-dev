<template>
  <div class="h-100">
    <BaseHeader text="我的收藏">
      <template slot="left">
        <i class="el-icon-arrow-left" @click="$router.back()"></i>
      </template>
    </BaseHeader>
    <CardScroll :moments="moments"></CardScroll>
  </div>
</template>

<script>
import BaseHeader from 'c/app/BaseHeader'
import CardScroll from 'c/CardScroll'

export default {
  name: 'MomentFriend',
  components: {
    BaseHeader,
    CardScroll,
  },
  data() {
    return {
      user_id: this.$store.getters.user._id,
    }
  },
  computed: {
    moments() {
      return this.$store.getters.collectMoments(this.user_id)
    },
  },
}
</script>

<style scoped lang="less"></style>
