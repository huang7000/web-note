<template>
  <el-dialog title="提示" :visible.sync="dialogVisible" width="80%" :before-close="handleClose">
    <div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="id" label="id" width="120"></el-table-column>
        <el-table-column label="日期" width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
      <div style="margin-top: 20px">
        <el-button @click="toggleSelection([tableData[1], tableData[2]])">选中状态</el-button>
        <el-button @click="toggleSelection()">取消选择</el-button>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="handleClose">确 定</el-button>
      </span>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tableData: [],
      multipleSelection: []
    };
  },

  methods: {
    handleClose() {
      this.toggleSelection();
      this.$emit("close");
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          //必须要在$nextTick里面执行，否则toggleRowSelection无效
          this.$nextTick(function() {
            this.$refs.multipleTable.toggleRowSelection(row, true);
          });
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    setSelection() {
      let rows = this.multipleSelection;
      if (rows) {
        rows.forEach(row => {
          this.$nextTick(function() {
            this.$refs.multipleTable.toggleRowSelection(row, true);
          });
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};
</script>