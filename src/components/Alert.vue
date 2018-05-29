<template>
  <div>
    <el-alert title="测试alert" type="warning" :showIcon="true"></el-alert>
  </div>
</template>

<script>
import ElAlert from 'packages/alert/index'
export default {
  name: 'alert',
  components: {ElAlert},
  data () {
    return {
      test: ''
    }
  },
  mounted () {
    console.log(this)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
