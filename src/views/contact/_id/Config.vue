<template>
  <div>
    <BaseHeader text="资料设置">
      <template slot="left">
        <i class="el-icon-arrow-left" @click="$router.back()"></i>
      </template>
    </BaseHeader>
    <main class="main-top main-bottom">
      <MenuPanel
        @menuClick="$router.push(`/contact/${contact.contact_id}/remark`)"
      >
        <template slot="name"
          >设置备注</template
        >
        <template slot="info">
          <i class="el-icon-arrow-right"></i>
        </template>
      </MenuPanel>
      <MenuPanel
        @menuClick="$router.push(`/contact/${contact.contact_id}/remark`)"
      >
        <template slot="name"
          >把他推荐给朋友</template
        >
        <template slot="info">
          <i class="el-icon-arrow-right"></i>
        </template>
      </MenuPanel>
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
      contact: state => state.contact.curContact
    })
  }
};
</script>
