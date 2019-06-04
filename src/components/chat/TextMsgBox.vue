<template>
  <div class="msg-flex" :class="msg.send ? 'msg__send': 'msg__receive'">
    <p class="msg-text">{{ msg.text }}</p>
    <img v-lazy="msg.avatar" alt="" />
  </div>
</template>

<script>
export default {
  name: 'TextMsgBox',
  props: ['msg'],
}
</script>

<style scoped lang="less">

@import "~css/colors";

.msg-flex {
  display: flex;
  margin: 30px 14px;
  justify-content: flex-end;
}

.msg-text {
  border-radius: 4px;
  background: ;
  margin: 0 10px;
  line-height: 1.6;
  padding: 10px 14px;
  font-size: 1.6rem;
  border: 1px solid grey;
  position: relative;
}

img {
  border-radius: 4px;
  width: 40px;
  height: 40px;
}


.msg__send {
  .msg-text {
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
      border-color: grey grey transparent transparent ;
    }
  }
}




.msg__receive {
  flex-direction: row-reverse;


  .msg-text:after {
    content: '';
    position: absolute;
    left: 0;
    top: 15px;
    width: 6px;
    height: 6px;
    transform: translateX(-52%) rotate(45deg) ;
    background-color: @bg;
    border: 1px solid;
    border-color: transparent transparent grey grey;
  }
}
</style>
