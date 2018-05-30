<template>
  <el-row :gutter="20" class="row-bg">
    <el-col ref="col" :sm="{span: 4, offset: 2}" :md="8" :lg="{span: 6, offset: 3}" class="col-bg">
      123
    </el-col>
  </el-row>
</template>

<script>
import ElRow from 'packages/row/index'
import ElCol from 'packages/col/index'

export default {
  name: 'Col',
  components: {ElCol, ElRow},
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .row-bg {
    background-color: #7f7f7f;
    .col-bg {
      background-color: #0074D9;
    }
  }
</style>
