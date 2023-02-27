<template>
  <el-button type="success" @click="testClick()">test</el-button>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      tableData: [1, 2, 3],
    };
  },
  watch: {},
  computed: {},
  created() {},
  methods: {
    testClick() {
      console.log(this.tableData);
    },
  },
};
</script>
