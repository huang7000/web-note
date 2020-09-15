/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
<template>
  <div>
    <el-button type="primary" @click="serachTable">查询</el-button>
    <el-table ref="multipleTable" :data="tableData" border style="width: 100%">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="id" label="主键" width="120"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
    </el-table>
  </div>
</template>
<script>
import api from "../utils/api";
export default {
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    async serachTable() {
      let data = await api.axiosGet("/api/userApi/getUserList");
      if (data.status === "ok") {
        this.tableData = data.list;
      } else {
         this.$message({
          showClose: true,
          message: data.error,
          type: 'warning'
        });
      }
    },
  },
};
</script>