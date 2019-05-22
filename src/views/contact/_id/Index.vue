<template>
  <div>
    <BaseHeader :text="contact.remark">
      <template slot="left">
        <i class="el-icon-arrow-left" @click="$router.back()"></i>
      </template>
      <template slot="right">
        <i
          class="el-icon-more"
          @click="$router.push(`/contact/${contact.contact_id}/config`)"
        ></i>
      </template>
    </BaseHeader>
    <main class="main-top">
      <MeCard
        :nickname="contact.remark"
        :email="contact.email"
        :avatar="contact.avatar"
      ></MeCard>
      <MenuPanelArrow
        name="设置备注"
        style="margin-top: 20px"
        @menuClick="$router.push(`/contact/${contact.contact_id}/remark`)"
      ></MenuPanelArrow>
      <ButtonPanel
        style="margin-top: 40px"
        text="发消息"
        icon="el-icon-chat-round"
        @panelClick="$router.push(`/chat/${contact._id}`)"
      >
      </ButtonPanel>
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";

import BaseHeader from "c/app/BaseHeader";
import MeCard from "c/me/MeCard";
import MenuPanelArrow from "c/app/MenuPanelArrow";
import ButtonPanel from "c/app/ButtonPanel";

export default {
  name: "ContactDetail",
  computed: {
    ...mapState({
      contact: state => state.contact.curContact
    })
  },
  components: {
    BaseHeader,
    MeCard,
    MenuPanelArrow,
    ButtonPanel
  }
};
</script>

<style scoped></style>
