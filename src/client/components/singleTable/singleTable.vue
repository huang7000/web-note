<template>
  <div>
    <!-- 查询条件 -->
    <slot name="searchsolt"></slot>
    <!-- 按钮 -->
    <slot name="buttonslot"></slot>
    <!-- 表格 @row-dblclick="rowdbClick"
    -->
    <el-table
      size="small"
      ref="singleTable"
      :data="tableData"
      highlight-current-row
      @current-change="rowClick"
      border
      style="width: 100%"
    >
      <el-table-column
        v-for="(item, index) in tableTitle"
        :header-align="item.headAlign"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :min-width="item.minWidth"
        :width="item.width ? item.width : null"
        :align="item.align"
        show-overflow-tooltip
      >
        <template slot-scope="scope">
          <span v-if="item.type.endsWith('selectFormat')">
            {{
            scope.row[item.prop]
            }}
          </span>
          <span
            v-else-if="item.type.endsWith('selectListFormat')"
          >{{ format[item.type](scope.row[item.prop]) }}</span>
          <span v-else-if="item.type.endsWith('fileFormat')">
            <a
              v-if="scope.row[item.prop]!=null&&scope.row[item.prop]!==undefined"
              @click="uploadFile(scope.row[item.prop])"
              class="file-class"
            >{{ scope.row[item.prop].fullName }}</a>
          </span>
          <span v-else-if="item.type.endsWith('Format')">
            {{
         scope.row[item.prop] }}
          </span>
          <span v-else>{{ scope.row[item.prop] }}</span>
        </template>
        <slot name="append"></slot>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <!-- <el-pagination
      v-if="pageShow"
      @sise-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageInfo.pageNum"
      :page-size="pageInfo.pageSize"
      :page-sizes="pageInfo.pageSizeArr"
      :total="pageInfo.total"
      layout="tatal,sizes,prev,pager,next,jumper"
      style="text-algin:right;paddding:10px;"
    ></el-pagination>-->
  </div>
</template>

<script>
import {
  searchTableData,
  deleteTableData,
  exportData,
  getTableWidth,
} from "@/client/utils/table";
import { modelStyle } from "@/client/utils/modelStyle";
//vue3.0废弃了过滤器。所以导入过滤器执行的具体函数
import format from "@/client/utils/format";
export default {
  props: {
    pageShow: Boolean,
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
      format: format,
      currentRow: null,
      tableTitle: Array,
      tableData: [],
      modelStyle: modelStyle,
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
        if (Array.isArray(selfThis.tableData)) {
          selfThis.tableTitle = getTableWidth(
            selfThis.tableData,
            selfThis.modelStyle,
            selfThis.tableTitle
          );
        }
      },
    },
  },
  methods: {
    getRowKeys() {},
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
      let row = {
        name: "小明",
        birthday: "2001-01-01",
        address: "福建省厦门市软件园二期",
        company: "中国建设银行",
        position: "软件工程师",
        workYears: "5",
        wages: "15000",
      };
      let tableData = this.tableData;
      tableData.push(row);
      this.tableData = tableData;
      //this.handleGetTableData();
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
        { url: "", method: "", name: "" },
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
  created() {
    this.handleSearch();
  },
};
</script>