<template>
  <div id="app">
    <div @click="reset">
      <el-button type="danger" style="float: right; margin: 10px 150px 0 0"
        >刷新</el-button
      >
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reset() {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  }
}
</script>

<style lang="stylus">
#app
  // font-family Avenir, Helvetica, Arial, sans-serif
  // -webkit-font-smoothing antialiased
  // -moz-osx-font-smoothing grayscale
  // text-align center
  // color #2c3e50
  // margin-top 60px
  max-width: max-content;
  width: 100%;
  margin: 0;
  text-align: left;
  padding: 5px;
</style>
