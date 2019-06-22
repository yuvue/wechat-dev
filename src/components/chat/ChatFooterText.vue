<template>
  <div class="dialogue-footer">
    <section>
      <i class="icon icon-yuyin" @click="$parent.showSpeak = true"></i>
    </section>
    <section @keyup.enter="click">
      <el-input v-model="text" />
    </section>
    <section>
      <el-button type="primary" size="small" @click="click">发送</el-button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ChatFooterText',
  data() {
    return {
      text: '',
    }
  },
  methods: {
    click() {
      if (this.text === '')
        return this.$notify.warning({
          message: '发送内容不能为空',
          duration: 0,
        })
      let data = {
        type: 'text',
        text: this.text,
      }
      this.$emit('send', 'text', data)
      this.text = ''
    },
  },
}
</script>

<style lang="less" scoped>
@import '~css/modules/chat-footer';
</style>
