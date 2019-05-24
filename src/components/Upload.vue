<template>
  <div class="input-file">
    <section>
      <el-button size="small">上传图片</el-button>
      <span>最多不超过9张</span>
      <input
        type="file"
        ref="pictures"
        multiple
        @input="inputImage"
        class="input-file-real"
      />
    </section>
    <section class="show-image">
      <div v-for="(src, i) in srcList" :key="i">
        <img :src="src" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Upload",
  data() {
    return { pictureList: [], srcList: [] };
  },
  methods: {
    inputImage() {
      let fileList = this.$refs.pictures.files;
      console.log(fileList);
      this.pictureList = fileList;
      const readerList = [];
      for (let i = 0; i < fileList.length; i++) {
        let reader = new FileReader();
        reader.onload = () => {
          let dataURL = reader.result;
          readerList.push(dataURL);
        };
        reader.readAsDataURL(fileList[i]);
      }
      this.srcList = readerList;
    }
  }
};
</script>

<style scoped lang="less">
.input-file {
  position: relative;
  font-size: 1.6rem;

  span {
    color: grey;
    font-size: 1.2rem;
    margin-left: 20px;
  }
}

.input-file-real {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 80px;
  height: 32px;
}

.el-input {
  line-height: 30px;
  width: 80px;
  margin: 0;
  font-size: 1.2rem;
}

.el-input__inner {
  height: 32px !important;
}
.show-image {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 10px 0;

  img {
    width: 100px;
    height: 100px;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
  }
}
</style>
