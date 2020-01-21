<template>
  <div>
    <p>{{ title }}</p>
    <grand-son></grand-son>
  </div>
</template>
<script>
import grandSon from "./grandSon"
export default {
  name: "Son",
  components: { grandSon },
provide: function () {
  return {
    messageSon: "provided by son",
    handleShow:this.handleShow
  }
},
  data () {
    return {
      title: '子组件'
    }
  },
    methods: {
   handleShow: function(){
        console.log("provided show by son");
    }
  }
};
</script>