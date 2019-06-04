<template>
  <div class="h-100">
    <BaseHeader text="朋友圈">
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
import BaseHeader from 'c/app/BaseHeader'
import Card from 'c/MomentCard'

export default {
  name: 'MomentFriend',
  components: {
    BaseHeader,
    Card,
  },
  computed: {
    moments() {
      return this.$store.state.moment.friendList
    },
  },
}
</script>

<style scoped lang="less"></style>
