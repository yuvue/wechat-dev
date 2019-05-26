<template>
  <div class="anchor">
    <p
      v-for="letter in list"
      :key="letter"
      class="anchor-letter"
      v-anchor="letter"
    >
      {{ letter }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Anchor",
  data() {
    return {
      list: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "M",
        "L",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ]
    };
  }
};
</script>

<style>
.anchor {
  position: fixed;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
}
.anchor-letter {
  padding: 2.6px;
}
</style>
