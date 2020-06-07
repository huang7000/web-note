<template>
  <p>
    <span>{{ folder.name }}</span>
    <tree-folder-contents :children="folder.children"></tree-folder-contents>
  </p>
</template>
<script>
  // 官方文档：「在我们的例子中，将 tree-folder 组件做为切入起点。
  // 我们知道制造矛盾的是 tree-folder-contents 子组件，所以我们在 tree-folder 组件的生命周期钩子函数 beforeCreate 中去注册 tree-folder-contents 组件」
  export default {
    props: ['folder'],
    data: function () {
      return {}
    },
    beforeCreate: function () {
    // 官方文档给出的是require
    // this.$options.components.TreeFolderContents = require('./tree-folder-contents.vue')
    // 在基于vue-cli@2.8.1按照上面的写法还是会报错
    // Failed to mount component: template or render function not defined.
    // 所以我们应该改为基于es6的写法异步加载一个组件如下
      this.$options.components.TreeFolderContents = () => import('./tree-folder-contents.vue')
    }
  }
</script>