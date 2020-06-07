<template>
  <div class="tree-menu">
    <ul v-for="menuItem in theModel">
      <treeMenu :model="menuItem"></treeMenu>
    </ul>
  </div>
</template>

<script>
  import treeMenuData from './treeMenuData';
  import treeMenu from './treeMenu';

  export default {
    name: "side-bar",
    components: {
      treeMenu
    },
    data() {
      return {
        theModel: treeMenuData
      }
    }
  }
</script>