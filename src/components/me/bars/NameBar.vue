<template>
  <MenuPanel>
    <template slot="name">
      <div>名字</div>
    </template>
    <template slot="info">
      <el-input v-if="isEdit" @input="handleInput" v-model="val"></el-input>
      <p v-else>{{ nickname }}</p>
    </template>
  </MenuPanel>
</template>

<script>
import MenuPanel from "c/app/MenuPanel";

export default {
  components: {
    MenuPanel
  },
  props: ["nickname", "isEdit"],
  data() {
    return {
      val: this.nickname
    };
  },
  methods: {
    handleInput() {
      this.$emit("editUser", "nickname", this.val);
    }
  }
};
</script>
