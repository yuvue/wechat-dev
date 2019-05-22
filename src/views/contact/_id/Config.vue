<template>
  <div>
    <BaseHeader text="资料设置">
      <template slot="left">
        <i class="el-icon-arrow-left" @click="$router.back()"></i>
      </template>
    </BaseHeader>
    <main class="main-top main-bottom">
      <MenuPanel
        name="设置备注"
        @menuClick="$router.push(`/contact/${contact._id}/remark`)"
      ></MenuPanel>
      <MenuPanel
        name="把他推荐给朋友"
        @menuClick="$router.push(`/contact/${contact._id}/remark`)"
      ></MenuPanel>
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MenuPanel from "c/app/MenuPanel";
import BaseHeader from "c/app/BaseHeader";

export default {
  name: "ContactConfig",
  components: {
    BaseHeader,
    MenuPanel
  },
  computed: {
    ...mapState({
      contact: state => state.curContact
    })
  }
};
</script>
