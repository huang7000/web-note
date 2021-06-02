<template>
  <div id="app">
    <v-home></v-home>
    <div class="foot_bot">
      <a href="https://beian.miit.gov.cn/" target="_blank">闽ICP备2020017656号-1</a>
    </div>
  </div>
</template>

<script>
import VHome from "@/views/home";

export default {
  components: { VHome },
};
</script>

<style lang="scss">
@import url("./assets/style/icon.scss");
html,
body {
  padding: 0;
  margin: 0;
  background: #f2f3f8;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
}
.foot_bot {
  position: fixed;
  z-index: 305;
  bottom: 0;
  right: 0;
  height: 39px;
  overflow: hidden;
  zoom: 1;
  margin-right: 10px;
  line-height: 39px;
  // background: #fff;
}

</style>
 