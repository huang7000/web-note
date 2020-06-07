<template>
  <div>
    <p>{{ title }}</p>
    <son></son>
  </div>
</template>
<script>
import Son from "./son";
export default {
  name: "Father",
  components: { Son },
  // provide选项提供变量
  provide: {
    message: "provided by father",
  },
  data() {
    return {
      title: "父组件"
    };
  },
  methods: {
    
  }
};
</script>