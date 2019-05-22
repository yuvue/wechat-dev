<template>
  <MenuPanel>
    <template slot="name">
      <div>地区</div>
    </template>
    <template slot="info">
      <el-input v-model="address" v-if="isEdit"></el-input>
      <p v-else>{{ address }}</p>
    </template>
  </MenuPanel>
</template>

<script>
import MenuPanel from "c/app/MenuPanel";

export default {
  components: {
    MenuPanel
  },
  props: ["address", "isEdit"]
};
</script>
