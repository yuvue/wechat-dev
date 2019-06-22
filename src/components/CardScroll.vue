<template>
  <main ref="scrollEl" class="main-top main-bottom">
    <Card v-for="i in (1, idx)" :key="i" :moment="moments[idx]"></Card>
  </main>
</template>

<script>
import Card from 'c/MomentCard'
import { getScrollTop } from 'util/scroll'

export default {
  props: ['moments'],
  components: {
    Card,
  },
  data() {
    return {
      isLoading: false,
      idx: 8,
    }
  },
  mounted() {
    let scrollEl = this.$refs.scrollEl
    scrollEl.addEventListener('scroll', () => {
      let { docHeight, scrollTop } = getScrollTop(scrollEl)
      this.isLoading = docHeight - scrollTop < 700
    })
  },
  watch: {
    isLoading(afterState, beforeState) {
      !beforeState && afterState && (this.idx += 6) && (this.isLoading = false)
    },
  },
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  max-height: cacl(100vh - 105px);
}
</style>
