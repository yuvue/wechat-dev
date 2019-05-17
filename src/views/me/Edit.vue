<template>
  <div>
    <Info v-if="!isEdit" @edit="edit" :user="user"></Info>
    <InfoEdit
      v-else
      @onSubmit="submit"
      @onCancel="edit"
      :user="user"
    ></InfoEdit>
  </div>
</template>

<script>
import Info from "./components/Info";
import InfoEdit from "./components/InfoEdit";
import { userEdit } from "service/user";

export default {
  name: "Edit",
  data() {
    return {
      user: this.$store.getters.getUser,
      isEdit: false
    };
  },
  components: {
    Info,
    InfoEdit
  },
  methods: {
    edit() {
      this.isEdit = !this.isEdit;
    },
    async submit() {
      let { nickname, address, email, signature, _id } = this.user;
      let res = await userEdit({ nickname, address, email, signature, _id });
      if (res.code === 0) {
        this.isEdit = false;
        console.log(res.user);
        this.$store.dispatch("setUser", res.user);
      }
    }
  }
};
</script>

<style lang="less" scoped></style>
