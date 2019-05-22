<template>
  <div>
    <BaseHeader :text="contact.remark">
      <template slot="left">
        <i class="el-icon-arrow-left" @click="$router.back()"></i>
      </template>
      <template slot="right">
        <i
          class="el-icon-more"
          @click="$router.push(`/chat/${contact._id}/config`)"
        ></i>
      </template>
    </BaseHeader>
    <main class="main-top main-bottom">
      <TextMsgBox
        v-for="msg in contact.msg"
        :msg="msg"
        :key="msg._id"
      ></TextMsgBox>
    </main>
    <ChatFooter></ChatFooter>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BaseHeader from "c/app/BaseHeader";
import ChatFooter from "c/chat/ChatFooter";
import TextMsgBox from "c/chat/TextMsgBox";

export default {
  name: "ChatDetail",
  data() {
    return {
      user: this.$store.getters["user"]
    };
  },
  computed: {
    contact() {
      let {
        contact_id,
        remark,
        messageList,
        avatar: c_avatar
      } = this.$store.state.contact.curContact;
      let msg = messageList.map(item => {
        let send = item.from_id === this.user._id;
        let avatar = send ? this.user.avatar : c_avatar;
        return { send, avatar, ...item };
      });
      return {
        _id: contact_id,
        msg,
        remark
      };
    }
  },
  components: {
    BaseHeader,
    ChatFooter,
    TextMsgBox
  }
};
</script>

<style scoped></style>
