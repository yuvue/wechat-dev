<template>
  <div>
    <BaseHeader text="我的群聊">
      <template slot="left">
        <i class="el-icon-arrow-left" @click="$router.back()"></i>
      </template>
      <template slot="right">
        <i
          class="icon icon-tianjiaduoyonghu"
          @click="$router.push('/group/add')"
        ></i>
      </template>
    </BaseHeader>
    <main class="main-top main-bottom">
      <ContactItem
        v-for="g in $store.getters.groups"
        :name="g.remark"
        :avatar="g.avatar"
        @itemClick="click(g)"
      ></ContactItem>
    </main>
  </div>
</template>

<script>
import BaseHeader from "c/app/BaseHeader";
import ContactItem from "c/contact/ContactItem";

export default {
  name: "chat",
  components: {
    BaseHeader,
    ContactItem
  },
  methods: {
    click(g) {
      this.$router.push(`/chat/${g.remark}`);
      this.$store.commit("SET_CUR_CONTACT", g);
    }
  }
};
</script>
