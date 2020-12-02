<template>
  <div class="clearAllList">
    <md-button class="clearAllBtn" @click="clearAll">clear all</md-button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({
      clearAll: "clearFn",
    }),
    // clearAll() {
    //   //this.$emit("clearOne");
    //   this.$store.commit("clearFn");
    // },
  },
};
</script>

<style>
.clearAllBtn {
  background-color: #f2b705 !important;
}
</style>    