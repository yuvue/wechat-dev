<template>
  <div class="msg-flex" :class="msg.send ? 'msg__send' : 'msg__receive'">
    <p class="msg-audio " ref="box" :style="{ width: width }" @click="play">
      <span>{{ msg.audio.sec + "''" }}</span>
      <i class="icon" :class="msg.send? 'icon-voice-send': 'icon-voice-get'"></i>
    </p>
    <img :src="msg.avatar" alt="" />
  </div>
</template>

<script>
import AmrPlayer from 'benz-amr-recorder'
let player = null

export default {
  name: 'AudioMsgBox',
  props: ['msg'],
  computed: {
    width() {
      return 14 + this.msg.audio.sec * (46 / 120) + '%'
    },
  },
  methods: {
    play() {
      player = new AmrPlayer()
      player.initWithUrl(this.msg.audio.src).then(() => {
        player.play()
        player.onEnded(() => {
          player = null
        })
      })
    },
  },
}
</script>

<style scoped lang="less">
@import '~css/colors';

.msg-flex {
  display: flex;
  margin: 30px 14px;
  justify-content: flex-end;
}

.msg-audio {
  border-radius: 4px;
  background: ;
  margin: 0 10px;
  line-height: 40px;
  font-size: 1.6rem;
  padding: 0 14px;
  border: 1px solid grey;
  position: relative;

  > span {
    padding-right: 4px;
    font-size: 1.2rem;
  }

  > span,
  > i {
    vertical-align: middle;
  }
}

img {
  border-radius: 4px;
  width: 40px;
  height: 40px;
}

.msg__send {
  .msg-audio {
    background-color: #0bb908;

    &:after {
      content: '';
      position: absolute;
      width: 6px;
      height: 6px;
      top: 15px;
      right: 0;
      transform: translateX(52%) rotate(45deg);
      border: 1px solid;
      background-color: inherit;
      border-color: grey grey transparent transparent;
    }
  }
}

.msg__receive {
  flex-direction: row-reverse;

  .msg-audio:after {
    content: '';
    position: absolute;
    left: 0;
    top: 15px;
    width: 6px;
    height: 6px;
    transform: translateX(-52%) rotate(45deg);
    background-color: @bg;
    border: 1px solid;
    border-color: transparent transparent grey grey;
  }
}
</style>
