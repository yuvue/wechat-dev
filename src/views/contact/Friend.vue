<template>
  <div>
    <BaseHeader text="新的朋友">
      <template slot="left">
        <i class="el-icon-arrow-left" @click="$router.back()"></i>
      </template>
    </BaseHeader>
    <main class="main-top main-bottom">
      <NewFriendPanel
        v-for="contact in $store.getters.newfriends"
        :contact="contact"
      ></NewFriendPanel>
    </main>
  </div>
</template>

<script>
import BaseHeader from "c/app/BaseHeader";
import NewFriendPanel from "c/contact/NewFriendPanel";

export default {
  name: "ContactFriend",
  components: {
    BaseHeader,
    NewFriendPanel
  }
};
</script>
