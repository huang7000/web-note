<template>
  <div>
    <div style="margin-bottom: 20px;">
      {{rowInfo.title}}
      <br />
      {{rowInfo.name}}
      <br />
      {{rowInfo.content}}
      <br />
      姓名：{{rowInfo.user.name}}
      <br />
      性别：：{{rowInfo.user.sex}}
      <br />
      年龄：：{{rowInfo.user.age}}
      <br />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rowInfo: Object,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>