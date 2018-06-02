<template>
  <header class="el-header" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'ElHeader',
  props: {
    height: {
      type: String,
      default: '60px'
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../theme-chalk/src/index";
</style>
