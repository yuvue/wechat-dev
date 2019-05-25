<template>
  <div>
    <BaseHeader :text="count ? `微信 (${count})` : '微信'"> </BaseHeader>
    <main class="main-top main-bottom">
      <ChatItem v-for="i in chats" :key="i._id" :contact="i"></ChatItem>
    </main>
    <BaseFooter> </BaseFooter>
  </div>
</template>

<script>
import BaseFooter from "c/app/BaseFooter";
import BaseHeader from "c/app/BaseHeader";
import ChatItem from "c/chat/ChatItem";

function setState(store) {
  store.dispatch("appShell/appHeader/setAppHeader", {
    show: true,
    title: "Lavas",
    showMenu: true,
    showBack: false,
    showLogo: false,
    actions: [
      {
        icon: "search",
        route: "/search"
      }
    ]
  });
}

export default {
  name: "index",
  metaInfo: {
    title: "Home",
    titleTemplate: "%s - Lavas",
    meta: [
      { name: "keywords", content: "lavas PWA" },
      {
        name: "description",
        content:
          "基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"
      }
    ]
  },
  data() {
    return {
      user_id: this.$store.getters.user._id
    };
  },
  computed: {
    chats() {
      return this.$store.getters.chats(this.user_id);
    },
    count() {
      return this.$store.getters.allUnReadCount(this.user_id);
    }
  },
  components: {
    BaseFooter,
    BaseHeader,
    ChatItem
  },
  async asyncData({ store, route }) {
    setState(store);
  },
  activated() {
    setState(this.$store);
  }
};
</script>

<style lang="stylus" scoped></style>
