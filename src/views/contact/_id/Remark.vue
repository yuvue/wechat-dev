<template>
  <div>
    <BaseHeader text="设置备注">
      <template slot="left">
        <i class="el-icon-arrow-left" @click="$router.back()"></i>
      </template>
      <template slot="right">
        <el-button type="primary" size="small" @click="onSubmit"
          >完成</el-button
        >
      </template>
    </BaseHeader>
    <main class="main-top">
      <el-input v-model="remark"></el-input>
    </main>
  </div>
</template>

<script>
import BaseHeader from "c/app/BaseHeader";

export default {
  name: "ContactRemark",
  components: {
    BaseHeader
  },
  data() {
    return {
      remark: ""
    };
  },
  methods: {
    async onSubmit() {
      let id = this.$route.params.id;
      let remark = this.remark;
      this.$store.dispatch("setRemark", { id, remark });
    }
  }
};
</script>
