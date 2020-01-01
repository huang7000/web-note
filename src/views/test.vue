<template>
  <div>
    <el-button type="text" @click="handleOpen">点击打开 Dialog</el-button>
    <tableComponent
      ref="tableComponentRef"
      :dialogVisible="dialogVisible"
      @close="handleClose"
    ></tableComponent>
  </div>
</template>
<script>
import tableComponent from "./tableComponent";
export default {
  components: { tableComponent: tableComponent },
  data() {
    return {
      dialogVisible: false,
      tableData: [
        {
          id: 1,
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 2,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 3,
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 4,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 5,
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 6,
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 7,
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  methods: {
    handleClose() {
      this.dialogVisible = false;
    },
    handleOpen() {
      let _this = this;
      _this.$refs.tableComponentRef.tableData = _this.tableData;
      let rows = _this.tableData.filter(value => value.id % 2 === 0);
      _this.$refs.tableComponentRef.multipleSelection=rows;
      this.$refs.tableComponentRef.toggleSelection(rows);
      console.log(_this.$refs.tableComponentRef.multipleSelection);
      _this.dialogVisible = true;
    }
  }
};
</script>