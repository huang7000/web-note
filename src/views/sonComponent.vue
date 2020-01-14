<template>
  <div>
    <el-button @click="handleClose()">点击</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      multipleSelection: []
    };
  },
  methods: {
    handleClose() {
      // 获取根组件的数据
      console.log(this.$root.foo);
      // 写入根组件的数据
      this.$root.foo = 2;
      console.log(this.$root.foo);
      // 访问根组件的计算属性
      console.log(this.$root.bar);
      // 调用根组件的方法
      console.log(this.$root.baz());
    }
  }
};
</script>