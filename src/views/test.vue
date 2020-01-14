<template>
  <div>
    <el-button type="text" @click="handleOpen">点击打开 Dialog</el-button>
    <sonComponent></sonComponent>
  </div>
</template>
<script>
import sonComponent from "./sonComponent";
export default {
  components: { sonComponent: sonComponent },
  data() {
    return {
      foo: 1
    };
  },
  computed: {
    bar: function() {
      return this.foo + "bar";
    }
  },
  methods: {
    baz: function() {
      this.foo++;
      return this.foo + "baz";
    }
  }
};
</script>