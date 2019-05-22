<template>
  <div class="card">
    <header>
      <section>
        <img src="/img/avatar/chenhuan.jpeg" alt="" />
      </section>
      <section class="middle">
        <p class="sender">我</p>
        <p class="time">2019/2/20</p>
      </section>
    </header>

    <main>
      <section>
        <div class="card-image">
          <img src="/img/avatar/chenhuan.jpeg" />
        </div>
      </section>
      <section class="card-part-2">
        <!---->
        <div class="card-text">
          这是周佳俊发的一篇测试发现模块的socket功能的说说
        </div>
        <div class="card-config">
          <p>
            <i class="icon icon-wujiaoxingkong"></i>
          </p>
          <p><i class="icon icon-aixin1"></i><span> 2</span></p>
          <p @click="showComment">
            <i class="icon icon-pinglun"></i><span> 4</span>
          </p>
        </div>
        <div class="card-comment" v-show="isComment">
          <el-divider></el-divider>
          <div>
            <CommentBox :comment="comment"></CommentBox>
          </div>
          <div class="comment-write">
            <input type="text" placeholder="请输入评论" /><button
              class="btn-send"
            >
              发送
            </button>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import CommentBox from "./CommentBox";
export default {
  name: "Card",
  data() {
    return {
      comment: {
        avatar: "/img/avatar/chenhuan.jpeg",
        time: Date.now(),
        text: "对的"
      },
      isComment: false
    };
  },
  components: {
    CommentBox
  },
  methods: {
    showComment() {
      this.isComment = !this.isComment;
    }
  }
};
</script>

<style scoped lang="less">
img {
  width: 40px;
  height: 40px;
  border-radius: 3px;
}

.card {
  width: 100%;
  padding: 15px;
  margin-bottom: 5px;
  background-color: #fff;
}

header {
  display: flex;
  width: 100%;

  .middle {
    margin-left: 10px;
    display: flex;
    flex-direction: column;

    p {
      height: 20px;
      line-height: 20px;
    }
  }

  .sender {
    font-size: 1.4rem;
    color: #449d48;
  }

  .time {
    font-size: 1rem;
    color: #808080;
  }
}

main {
  padding-left: 50px;
}

.card-image {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  img {
    width: 80px;
    height: 80px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
}

.icon {
  font-size: 1.4rem;
}

.card-text {
  font-size: 1.4rem;
  line-height: 1.3;
  word-wrap: break-word;
}

.card-config {
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
  margin-top: 14px;
}

.comment-write {
  height: 24px;
  line-height: 24px;
  width: 100%;
  margin-top: 20px;

  input {
    width: 70%;
    height: 100%;
    border: 1px solid #999;
    border-radius: 2px;
    padding: 3px 6px;
  }

  .btn-send {
    border: 1px solid #4d4d4d;
    border-radius: 2px;
    padding: 4px 10px;
    background-color: #5dc261;
    float: right;
  }
}
</style>
