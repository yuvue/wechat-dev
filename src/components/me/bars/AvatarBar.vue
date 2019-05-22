<template>
  <MenuPanel>
    <template slot="name">
      <div>头像</div>
    </template>
    <template slot="info">
      <div v-if="isEdit" class="l-f">
        <section style="margin-right: 40px">
          <img class="img-60" :src="avatar" alt="" ref="img" />
        </section>
        <section>
          <el-upload
            class="upload-demo"
            action="/api/upload"
            :on-success="handleSuccess"
            list-type="picture"
          >
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </section>
      </div>
      <img :src="avatar" alt="" class="img-60" v-else />
    </template>
  </MenuPanel>
</template>

<script>
import MenuPanel from "c/app/MenuPanel";

export default {
  components: {
    MenuPanel
  },
  props: ["avatar", "isEdit"],
  methods: {
    handleSuccess(res) {
      this.$refs.img.src = res.src;
      this.$store.dispatch("updateAvatar", res.src);
    }
  }
};
</script>
