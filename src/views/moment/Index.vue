<template>
  <div class="h-100">
    <BaseHeader text="瞬间">
      <template slot="right">
        <i class="el-icon-plus" @click="$router.push('/moment/add')"></i>
      </template>
    </BaseHeader>
    <CardScroll :moments="moments"></CardScroll>
    <BaseFooter></BaseFooter>
  </div>
</template>

<script>
import CardScroll from 'c/CardScroll'
import BaseHeader from 'c/app/BaseHeader'
import BaseFooter from 'c/app/BaseFooter'

export default {
  name: 'Moment',
  components: {
    CardScroll,
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
