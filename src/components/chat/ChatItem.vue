<template>
  <div class="item" @click="itemClick">
    <div class="item-part item-part-left">
      <img :src="contact.avatar" alt="#" />
      <div class="count" v-show="contact.unReadCount">
        {{ contact.unReadCount }}
      </div>
    </div>
    <div class="item-part item-part-right">
      <p class="name">
        {{ contact.remark }}
        <b class="time">{{ contact.time | _time }}</b>
      </p>
      <p class="msg">{{ contact.msg | _msg }}</p>
    </div>
  </div>
</template>

<script>
import _time from '@/utils/filterTime'

export default {
  name: 'ChatItem',
  props: ['contact'],
  methods: {
    itemClick() {
      let id = this.contact._id
      this.$router.push(`/chat/${id}`)
      this.$store.dispatch('setCurContact', id)
    },
  },
  filters: {
    _msg(msg) {
      if (msg.type === 'audio') return `[语音] ${msg.audio.sec}s`
      else return msg.text
    },
    _time,
  },
}
</script>

<style scoped lang="less">
@import '~css/colors.less';
.item {
  height: 70px;
  width: 100%;
  padding: 11px 15px;
  margin-bottom: 1px;
  position: relative;
  background-color: #fff;
}

.item-part {
  height: 48px;
  float: left;
  position: relative;
}

.item-part-left {
  width: 48px;
  position: relative;
}

.item-part-right {
  padding-left: 12px;
  width: calc(100% - 48px);
}

img {
  display: block;
  height: 48px;
  width: 48px;
  border-radius: 4px;
}

.name {
  margin: 0;
  height: 25px;
  line-height: 25px;
  position: relative;
  font-size: 1.6em;
  color: #000;
}

.msg {
  height: 23px;
  line-height: 23px;
  position: relative;
  font-size: 1.3em;
  color: #888;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 80vw;
}

.time {
  position: absolute;
  right: 4px;
  color: @font-light-2;
  font-size: 1.2rem;
  font-weight: 100;
}

.count {
  position: absolute;
  height: 18px;
  padding: 0 5.4px;
  line-height: 18px;
  text-align: center;
  color: white;
  background-color: red;
  border-radius: 50%;
  right: 0;
  top: 0;
  transform: translate(50%, -50%);
}
</style>
