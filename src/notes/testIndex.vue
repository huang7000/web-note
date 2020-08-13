<template>
  <div>
    <div style="margin-bottom: 20px;">表格单选</div>
    <singleTable
      :pageShow="pageShow"
      :tableTitle="tableTitle"
      :searchOpt="searchOpt"
      :searchRes="searchRes"
      :deleteOpt="deleteOpt"
      :deleteRes="deleteRes"
      :exportOpt="exportOpt"
      :exportRes="exportRes"
      :exportInfoOpt="exportInfoOpt"
      :exportInfoRes="exportInfoRes"
    >
      <template v-slot:searchslot>
        <h1>Here might be a page title</h1>
        <el-button>查询</el-button>
      </template>
    </singleTable>
  </div>
</template>

<script>
import singleTable from "@/demos/elDemo/components/singleTable/singleTable.vue";
export default {
  components: {
    singleTable,
  },
  data() {
    let tableTitle = [
      { prop: "name", label: "姓名", type: "self" },
      { prop: "birthday", label: "生日", type: "dateFormat" },
      { prop: "address", label: "地址", type: "left" },
      { prop: "company", label: "公司", type: "center" },
      { prop: "position", label: "职位", type: "selectFormat" },
      { prop: "workYears", label: "工龄", type: "numFormat" },
      { prop: "wages", label: "工资", type: "moneyFormat" },
    ];
    return {
      pageShow: true,
      tableTitle: tableTitle,
      searchOpt: { url: "", method: "", name: "" },
      searchRes: { status: "", message: "", tableData: "", totalCount: "" },
      deleteOpt: { url: "", method: "", name: "" },
      deleteRes: { status: "", message: "" },
      exportOpt: { url: "", method: "", name: "" },
      exportRes: {},
      exportInfoOpt: { url: "", method: "", name: "" },
      exportInfoRes: {},
    };
  },
  methods: {},
  created() {
    //this.handleSearch();
  },
};
</script>