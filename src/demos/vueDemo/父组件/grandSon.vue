<template>
  <div>
    <p>message：{{ message }}</p>
    <p>messageSon：{{ messageSon }}</p>
    <button @click="handleShow">点击</button>
  </div>
</template>
<script>
export default {
  name: "GrandSon",
  inject: ["message","messageSon","handleShow"],
  data() {
    return {
      title: "孙组件"
    };
  },
  methods: {}
};
</script>