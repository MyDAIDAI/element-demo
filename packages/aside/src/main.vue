<template>
  <aside class="el-aside" :style="{width}">
    <slot></slot>
  </aside>
</template>

<script>
export default {
  name: 'ElMain',
  componentName: 'ElAside',
  props: {
    width: {
      type: String,
      default: '300px'
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>
