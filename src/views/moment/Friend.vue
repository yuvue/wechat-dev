<template>
  <div class="h-100">
    <BaseHeader text="朋友圈">
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
    CardScroll,
    BaseHeader,
  },
  computed: {
    moments() {
      return this.$store.state.moment.friendList
    },
  },
}
</script>

<style scoped lang="less"></style>
