<template>
  <div class="card">
    <header>
      <section>
        <img :src="moment.avatar" class="avatar" alt="" />
      </section>
      <section class="middle">
        <p class="sender">{{ name }}</p>
        <p class="time">{{ moment.add_time | _time }}</p>
      </section>
    </header>
    <div class="card-image">
      <img :src="img" v-for="(img, i) in moment.img" :key="i" />
    </div>
    <section>
      <div class="card-text">
        {{ moment.text }}
      </div>
      <div class="card-voice">
        <AmrPlayer :audio="moment.audio"></AmrPlayer>
      </div>
      <div class="card-config">
        <p>
          <i
            class="icon"
            :class="isCollected ? 'icon-star' : 'icon-wujiaoxingkong'"
            @click="collect"
          ></i>
        </p>
        <p>
          <i class="icon icon-aixin1"></i><span> {{ moment.likes }}</span>
        </p>
        <p @click="showComment">
          <i class="icon icon-pinglun"></i
          ><span v-if="moment.comments"> {{ moment.comments.length }}</span>
        </p>
      </div>
      <div class="card-comment" v-show="isComment">
        <el-divider></el-divider>
        <div>
          <CommentBox
            v-for="comment in moment.comments"
            :comment="comment"
            :key="comment._id"
          ></CommentBox>
        </div>
        <div class="comment-write">
          <el-input
            type="text"
            placeholder="请输入评论"
            v-model="text"
          /><el-button size="small" type="primary" @click="comment">
            发送
          </el-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CommentBox from "./CommentBox";
import _time from "filter/time";
import AmrPlayer from "c/AmrPlayer";

export default {
  name: "Card",
  props: ["moment"],
  components: {
    CommentBox,
    AmrPlayer
  },
  data() {
    return {
      isComment: false,
      text: "",
      user_id: this.$store.getters.user._id
    };
  },
  computed: {
    name() {
      let id = this.moment.user_id;
      if (id === this.user_id) return "我";
      let remark = this.$store.getters.contactIdRemarkMap.get(id) || "";
      if (remark) return remark;
      return this.moment.nickname || "某个很帅的人";
    },
    isCollected() {
      return this.moment.collects.includes(this.user_id);
    }
  },
  methods: {
    showComment() {
      this.isComment = !this.isComment;
    },
    comment() {
      let id = this.moment._id;
      this.$store.dispatch("addComment", {
        id,
        user_id: this.user_id,
        text: this.text
      });
      this.text = "";
    },
    collect() {
      this.$store.dispatch("collectMoment", {
        id: this.moment._id,
        config: this.isCollected ? -1 : 1
      });
    }
  },
  filters: {
    _time
  }
};
</script>

<style lang="less">
.avatar {
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

.card-image {
  margin: 14px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  img {
    width: 80px;
    height: 80px;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
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
  width: 100%;
  margin-top: 20px;
  position: relative;

  .btn-send {
    border: 1px solid #4d4d4d;
    border-radius: 2px;
    padding: 4px 10px;
    background-color: #5dc261;
    float: right;
  }
}
.card-comment .el-input {
  width: 70%;
  height: 36px;
  padding: 3px 6px;
  vertical-align: center;

  .el-input__inner {
    height: 100%;
  }
}
.card-comment .el-button {
  position: absolute;
  right: 0;
  top: 2px;
  font-size: 1rem;
  vertical-align: center;
  padding: 8px 15px;
}
.card-voice {
  margin: 14px 0 24px;
}
.icon-star {
  color: red;
}
</style>
