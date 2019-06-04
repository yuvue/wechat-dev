<template>
  <div class="h-100">
    <BaseHeader text="瞬间">
      <template slot="right">
        <i class="el-icon-plus" @click="$router.push('/moment/add')"></i>
      </template>
    </BaseHeader>
    <main class="main-top main-bottom">
      <Card v-for="moment in moments" :key="moment._id" :moment="moment">
      </Card>
    </main>
    <BaseFooter></BaseFooter>
  </div>
</template>

<script>
import Card from 'c/MomentCard'
import BaseHeader from 'c/app/BaseHeader'
import BaseFooter from 'c/app/BaseFooter'

export default {
  name: 'Moment',
  components: {
    Card,
    BaseFooter,
    BaseHeader,
  },
  computed: {
    moments() {
      return this.$store.state.moment.allList
    },
  },
}
</script>

<style scoped lang="less"></style>
