<template>
  <div>
    <!-- 查询条件 -->
    <slot name="searchSlot" slot="searchSlot"></slot>
    <!-- 按钮 -->
    <slot name="buttonSlot" slot="buttonSlot"></slot>
    <!-- 表格 -->
    <el-table
      size="small"
      ref="singleTable"
      :data="tableData"
      highlight-current-row
      @current-change="rowClick"
      @row-dblclick="rowdbClick"
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
          <span v-if="item.type.endsWith('selectFormat')">{{ scope.row[item.prop] | item.type }}</span>
          <span
            v-else-if="item.type.endsWith('selectListFormat')"
          >{{ scope.row[item.prop] | item.type }}</span>
          <span v-else-if="item.type.endsWith('fileFormat')">
            <a
              v-if="scope.row[item.prop]!=null&&scope.row[item.prop]!==undefined"
              @click="uploadFile(scope.row[item.prop])"
              class="file-class"
            >{{ scope.row[item.prop].fullName }}</a>
          </span>
          <span v-else-if="item.type.endsWith('Format')">{{ scope.row[item.prop] | item.type }}</span>
          <span v-else>{{ scope.row[item.prop] }}</span>
        </template>
        <slot name="append" slot="append"></slot>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      v-if="pageShow"
      @sise-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageInfo.pageNum"
      :page-size="pageInfo.pageSize"
      :page-sizes="pageInfo.pageSizeArr"
      :total="pageInfo.total"
      layout="tatal,sizes,prev,pager,next,jumper"
      style="text-algin:right;paddding:10px;"
    ></el-pagination>
  </div>
</template>

<script>
import {
  searchTableData,
  deleteTableData,
  exportData,
  getTableWidth,
} from "@/demos/elDemo/utils/table";
export default {
  props: {
    pageShow: Boolean,
    fontModel: Object,
    formatModel: Object,
    alignModel: Object,
    tableTitle: Array,
    searchOpt: Object,
    searchRes: Object,
    deleteOpt: Object,
    deleteRes: Object,
    exportOpt: Object,
    exportRes: Object,
    exportInfoOpt: Object,
    exportInfoRes: Object,
  },
  data() {
    return {
      loading: false,
      currentRow: null,
      tableData: Array,
      searchModel: {},
      pageInfo: {
        pageNum: 1,
        pageSize: 10,
        total: null,
        pageSizeArr: [10, 20, 30, 40, 50, 100],
      },
    };
  },
  watch: {
    tableData: {
      // eslint-disable-next-line no-unused-vars
      handler(val, oldval) {
        const selfThis = this;
        //getTableWidth(tableData, tableTitle, fontModel, formatModel, alignModel)
        selfThis.tableTitle = getTableWidth(
          selfThis.tableData,
          selfThis.tableTitle,
          selfThis.fontModel,
          selfThis.formatModel,
          selfThis.alignModel
        );
      },
    },
  },
  methods: {
    // 行单击选中事件
    rowClick(row) {
      this.currentRow = row;
    },
    // 行双击选中事件
    rowdbClick() {},
    // 重置方法
    handleDafault() {
      this.$refs["seachRef"].resetFields();
    },
    // 查询方法
    handleSearch() {
      this.pageInfo.pageNum = 1;
      this.handleGetTableData();
    },
    // 查询方法
    handleGetTableData() {
      let selfThis = this;
      searchTableData(selfThis, selfThis.pageShow);
    },
    //pageNum
    handleSizeChange(val) {
      this.pageInfo.pageSize = val;
    },
    //pageNum
    handleCurrentChange(val) {
      this.pageInfo.pageNum = val;
    },
    handleCreate(name) {
      let selfThis = this;
      selfThis.$emit("handleCreate", name, selfThis.currentRow);
    },
    handleEdit(name) {
      let selfThis = this;
      if (selfThis.currentRow === null) {
        selfThis.$message.warning("请选择需要编辑的数据");
        return;
      }
      selfThis.$emit("handleEdit", name, selfThis.currentRow);
    },
    handleDetail(name) {
      let selfThis = this;
      if (selfThis.currentRow === null) {
        selfThis.$message.warning("请选择需要查看的数据");
        return;
      }
      selfThis.$emit("handleDetail", name, selfThis.currentRow);
    },
    handleDetele() {
      let selfThis = this;
      if (selfThis.currentRow === null) {
        selfThis.$message.warning("请选择需要删除的数据");
        return;
      }
      deleteTableData(selfThis, selfThis.currentRow);
    },
    handleExoprt() {
      let selfThis = this;
      let data = selfThis.searchModel;
      exportData(
        selfThis,
        "数据导出中，请稍后...",
        data,
        selfThis.exportOpt.url,
        selfThis.exportOpt.method,
        selfThis.exportOpt.name
      );
    },
    handleExoprtInfo() {
      let selfThis = this;
      if (selfThis.currentRow === null) {
        selfThis.$message.warning("请选择需要导出的数据");
        return;
      }
      exportData(
        selfThis,
        "数据导出中，请稍后...",
        selfThis.currentRow,
        selfThis.exportInfoOpt.url,
        selfThis.exportInfoOpt.method,
        selfThis.exportInfoOpt.name
      );
    },
  },
};
</script>