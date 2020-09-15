<template>
  <div>
    <div style="margin-bottom: 20px;">表格单选</div>
    <singleTable
      ref="single"
      :pageShow="pageShow"
      :searchOpt="searchOpt"
      :searchRes="searchRes"
      :deleteOpt="deleteOpt"
      :deleteRes="deleteRes"
      :exportOpt="exportOpt"
      :exportRes="exportRes"
      :exportInfoOpt="exportInfoOpt"
      :exportInfoRes="exportInfoRes"
    >
      <template v-slot:searchsolt>
        <el-button>查询</el-button>
      </template>
    </singleTable>
  </div>
</template>

<script>
import singleTable from "@/client/components/singleTable/singleTable.vue";
export default {
  components: {
    singleTable,
  },
  data() {
    let tableTitle = [
      { prop: "name", label: "姓名", type: "self" },
      { prop: "birthday", label: "生日", type: "dateCNFormat" },
      { prop: "address", label: "家庭地址", type: "left" },
      { prop: "company", label: "公司名称", type: "center" },
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
  mounted() {
    this.$refs.single.tableTitle = this.tableTitle;
  },
  created() {
    //this.handleSearch();
  },
};
</script>