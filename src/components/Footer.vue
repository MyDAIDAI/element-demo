<template>
  <el-footer height="100px">footer</el-footer>
</template>

<script>
import ElFooter from 'packages/footer/index'
export default {
  name: 'Footer',
  components: {ElFooter},
  data () {
    return {}
  },
  mounted () {
    console.log(this.$children[0].$el.style.height === '100px')
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>
