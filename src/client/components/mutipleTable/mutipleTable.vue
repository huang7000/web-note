<template>
  <div>
    <!-- 查询条件 -->
    <slot name="searchSlot" slot="searchSlot"></slot>
    <!-- 按钮 -->
    <slot name="buttonSlot" slot="buttonSlot"></slot>
    <!-- 表格 -->
    <el-table
      size="small"
      ref="multipleTable"
      :data="tableData"
      highlight-current-row
      @selection-change="selectionClick"
      @row-dblclick="rowdbClick"
      :rew-key="getRowKeys"
      style="width: 100%"
    >
      <el-table-column type="selection" :reserve-selection="reserve" width="50" align="center"></el-table-column>
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
          <span v-if="item.filter && item.filter === 'thousandToNumFormat'">
            {{
            scope.row[item.prop] | thousandToNumFormat
            }}
          </span>
          <span v-else-if="item.filter && item.filter === 'dateFormat'">
            {{
            scope.row[item.prop] | dateFormat
            }}
          </span>
          <span v-else-if="item.filter && item.filter === 'fileFormat'">
            <a style="text-decoration:underline" @click="uploadDownload"></a>
          </span>
          <span v-else>{{ scope.row[item.prop] }}</span>
        </template>
        <slot name="append" slot="append"></slot>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      v-if="isPage"
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
import request from "@/client/utils/api";
import {
  searchTableData,
  deleteTableData,
  exportData,
  getTableWidth,
} from "@/client/utils/table";
export default {
  props: {
    reserve: Boolean, //记忆多选
    echoMark: Boolean, //回显标记
    echo: Boolean, //回显
    isPage: Boolean, //是否分页
    statusTrue: String,
    tableTitle: Array,
    searchOpt: Object,
    searchRes: Object,
    deleteOpt: Object,
    deleteRes: Object,
    exportOpt: Object,
    exportRes: Object,
  },
  data() {
    return {
      loading: false,
      multipleSelection: Array,
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

  methods: {
    // 行单击选中事件
    selectionClick(val) {
      this.multipleSelection = val;
    },
    // 行双击选中事件
    rowdbClick() {},
    // 重置方法
    handleDafault() {
      this.$refs["seachRef"].resetFields();
    },
    // 查询方法
    handleSearch() {
      let selfThis = this;
      selfThis.pageInfo.pageNum = 1;
      if (selfThis.echoMark) {
        selfThis.$refs.multipleTable.clearSelection();
        selfThis.multipleSelection = [];
        selfThis.echo = true;
      }
      selfThis.handleGetTableData();
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
      selfThis.$emit("handleCreate", name);
    },
    handleEdit(name) {
      let selfThis = this;
      if (selfThis.multipleSelection.length !== 1) {
        selfThis.$message.warning("请选择一条数据编辑");
        return;
      }
      selfThis.$emit(
        "handleEdit",
        name,
        selfThis.selfThis.multipleSelection[0]
      );
    },
    handleDetail(name) {
      let selfThis = this;
      if (selfThis.multipleSelection.length !== 1) {
        selfThis.$message.warning("请选择一条数据查看");
        return;
      }
      selfThis.$emit(
        "handleDetail",
        name,
        selfThis.selfThis.multipleSelection[0]
      );
    },
    handleDetele() {
      let selfThis = this;
      if (selfThis.multipleSelection.length === 0) {
        selfThis.$message.warning("请选择数据删除");
        return;
      }
      deleteTableData(selfThis, selfThis.multipleSelection);
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
      if (selfThis.multipleSelection.length !== 1) {
        selfThis.$message.warning("请选择需要导出的数据");
        return;
      }
      exportData(
        selfThis,
        "数据导出中，请稍后...",
        selfThis.multipleSelection[0],
        selfThis.exportOpt.url,
        selfThis.exportOpt.method,
        selfThis.exportOpt.name
      );
    }
  }
};
</script>
