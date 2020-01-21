<template>
  <ul>
    <li v-for="child in children">
      <tree-folder v-if="child.children" :folder="child"></tree-folder>
      <span v-else>{{ child.name }}</span>
    </li>
  </ul>
</template>
<script>
  import TreeFolder from './tree-folder.vue'
  export default {
    props: ['children'],
    components: {
      TreeFolder
    }
  }
</script>