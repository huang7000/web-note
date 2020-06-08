<template>
  <div>
    <!-- 查询条件 -->
    <slot name="searchSlot" slot="searchSlot"></slot>
    <!-- 按钮 -->
    <slot name="buttonSlot" slot="buttonSlot"></slot>
    <!-- 表格 -->
    <el-table
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
          <span
            v-if="item.filter && item.filter === 'thousandToNumFormat'"
          >{{ scope.row[item.prop] | thousandToNumFormat }}</span>
          <span
            v-else-if="item.filter && item.filter === 'dateFormat'"
          >{{ scope.row[item.prop] | dateFormat }}</span>
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
import request from "@/demos/elDemo/utils/request";
import checkBtn from "@/demos/elDemo/utils/common";
import { getToken } from "@/demos/elDemo//utils/common";
export default {
  props: {
    pageShow: Boolean,
    tableTitle: Array,
    searchOpt: Object,
    deleteOpt: Object,
    exportOpt: Object
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
        pageSizeArr: [10, 20, 30, 40, 50, 100]
      }
    };
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
      selfThis.loading = true;
      let data = selfThis.searchModel;
      if (this.pageShow) {
        data.pageSize = selfThis.pageInfo.pageSize;
        data.pageNum = selfThis.pageInfo.pageNum;
      }
      let opt = {
        url: selfThis.searchOpt.url,
        method: selfThis.searchOpt.method
      };
      if (selfThis.searchOpt.method == "post") {
        opt["data"] = data;
      } else {
        opt["params"] = data;
      }
      let promise = request(opt);
      promise.then(function(res) {
        if (res.code === "00" || res.status === "000") {
          selfThis.tableData = res.data;
          selfThis.pageInfo.tatal = res.data;
        } else {
          selfThis.$message.warning(res.message);
        }
      });
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
      selfThis
        .$confirm("确定删除选中项吗？", "操作提示", {
          confirmButtonText: "确定",
          cancelButtonText: "确定",
          type: "warning"
        })
        .then(() => {
          var data = selfThis.currentRow;
          let opt = {
            url: selfThis.deleteOpt.url,
            method: selfThis.deleteOpt.method
          };
          if (selfThis.deleteOpt.method == "post") {
            opt["data"] = data;
          } else {
            opt["params"] = data;
          }
          let promise = request(opt);
          promise.then(function(res) {
            if (res.code === "00" || res.status === "000") {
              selfThis.$message.success(res.message);
            } else {
              selfThis.$message.warning(res.message);
            }
          });
        });
    },
    handleExoprt() {
      let selfThis = this;
      let data = selfThis.searchModel;
      selfThis.exportData(data);
    },
    handleExoprtInfo() {
      let selfThis = this;
      if (selfThis.currentRow === null) {
        selfThis.$message.warning("请选择需要导出的数据");
        return;
      }
      selfThis.exportData(selfThis.currentRow);
    },
    exportData(data) {
      let selfThis = this;
      selfThis.$loading({ text: "文件导出中，请稍后...", fullscreen: true });
      let opt = {
        url: selfThis.exportOpt.url,
        method: selfThis.exportOpt.method,
        responseType: "blob",
        token: getToken()
      };
      if (selfThis.exportOpt.method == "post") {
        opt["data"] = data;
      } else {
        opt["params"] = data;
      }
      let name = selfThis.exportOpt.name + selfThis.exportOpt.docType;
      let promise = request(opt);
      promise
        .then(function(res) {
          const link = document.create.createElement("a");
          const blob = new Blob([res], { type: "application/vnd.ms-excel" });
          if ("download" in link) {
            link.style.display = "none";
            link.href = URL.createObjectURL(blob);
            link.setAttribute("download", name);
            document.body.append(link);
            link.click();
            document.body.removeChild(link);
          } else {
            // IE10+下载
            window.navigator.msSaveOrOpenBlob(blob, name);
          }
          selfThis.$loading().close();
        })
        .catch(function() {
          selfThis.$loading().close();
        });
    },
    checkBtn(btnId) {
      return checkBtn(btnId);
    }
  }
};
</script>
