<template>
  <div>
    <MeHeader
      :is-edit="isEdit"
      @editUser="editUser"
      @changeEditState="changeEditState"
      @onSubmit="onSubmit"
    ></MeHeader>
    <main class="main-top">
      <div class="c-1">
        <AvatarBar
          :avatar="user.avatar"
          :is-edit="isEdit"
          @editUser="editUser"
        ></AvatarBar>
        <NameBar
          :nickname="user.nickname"
          :is-edit="isEdit"
          @editUser="editUser"
        ></NameBar>
        <WechatNumberBar
          :email="user.email"
          :is-edit="isEdit"
          @editUser="editUser"
        ></WechatNumberBar>
        <AddressBar
          :address="user.address"
          :is-edit="isEdit"
          @editUser="editUser"
        ></AddressBar>
        <SignatureBar
          :signature="user.signature"
          :is-edit="isEdit"
          @editUser="editUser"
        ></SignatureBar>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { userEdit } from "@/services/user";
import MeHeader from "c/me/MeHeader";
import AddressBar from "c/me/bars//AddressBar";
import AvatarBar from "c/me/bars//AvatarBar";
import NameBar from "c/me/bars//NameBar";
import SignatureBar from "c/me/bars//SignatureBar";
import WechatNumberBar from "c/me/bars//WechatNumberBar";

export default {
  name: "Edit",
  data() {
    return {
      isEdit: false
    };
  },
  components: {
    MeHeader,
    AddressBar,
    AvatarBar,
    NameBar,
    SignatureBar,
    WechatNumberBar
  },
  computed: {
    ...mapState({
      user: state => state.user.user
    })
  },
  methods: {
    changeEditState() {
      this.isEdit = !this.isEdit;
    },
    async onSubmit() {
      let res = await userEdit(this.user);
      if (res.code === 0) {
        this.isEdit = false;
        this.$store.dispatch("setUser", res.user);
      }
    },
    editUser(key, value) {
      this.user[key] = value;
    }
  }
};
</script>

<style lang="less" scoped>
@import "~css/global.less";
input[type="file"] {
  width: 86px;
  height: 30px;
  position: absolute;
  right: 30px;
  opacity: 0;
}
@media (min-width: 800px) {
  .c-1 {
    width: 600px;
    top: 20vh;
    .x-ctr;
  }
}
</style>
