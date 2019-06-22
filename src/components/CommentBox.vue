<template>
  <div class="box">
    <img :src="comment['avatar']" alt="" />
    <div class="comment">
      <p class="time">{{ comment['add_time'] | filterTime }}</p>
      <p class="text">{{ comment['text'] }}</p>
    </div>
  </div>
</template>

<script>
import filterTime from '@/utils/filterTime'
export default {
  name: 'CommentBox',
  props: {
    comment: { type: Object },
  },
  data() {
    return {
      commentText: '',
    }
  },
  filters: {
    filterTime,
  },
}
</script>

<style lang="less" scoped>
.box {
  margin-top: 10px;
  display: flex;
}

img {
  width: 34px;
  height: 34px;
  border-radius: 2px;
}

.comment {
  margin-left: 10px;

  p {
    height: 17px;
    line-height: 17px;
    text-align: left;
    font-size: 1.2rem;
  }

  .time {
    color: #a9a9a9;
  }
}
</style>
