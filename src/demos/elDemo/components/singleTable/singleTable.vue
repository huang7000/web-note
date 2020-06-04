<template>
  <div>
    <el-table
      ref="singleTable"
      :data="tableData"
      highlight-current-row
      @current-change="handleCurrentChangeRow"
      :rew-key="getRowKeys"
      style="width: 100%"
    >
      <el-table-column
        header-align="center"
        v-for="(item, index) in tableTitle"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :min-width="handleTableWidth"
        :width="item.width ? item.width : handleTableWidth"
        :align="item.align"
        show-overflow-tooltip
      >
        <template slot-scope="scope">
          <span v-if="item.filter && item.filter === 'thousandToNumFormat'">{{
            scope.row[item.prop] | thousandToNumFormat
          }}</span>
          <span v-else-if="item.filter && item.filter === 'dateFormat'">{{
            scope.row[item.prop] | dateFormat
          }}</span>
          <span v-else-if="item.filter && item.filter === 'fileFormat'">
            <a style="text-decoration:underline" @click="uploadDownload"></a>
          </span>
          <span v-else>{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
    </el-table>

    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="handleClose">确 定</el-button>
    </span>
  </div>
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
    getRowKeys(row) {
      return row.id;
    },
    uploadDownload(row) {
      return row.id;
    },
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
