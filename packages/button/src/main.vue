<template>
  <button
    class="el-button"
    :class="[
    type ? 'el-button--' + type : '',
    size ? 'el-button--' + size : '',
    {
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled
    }]"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
    @click="handleClick"
  >
    <i class="el-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
  </button>
</template>

<script>
// TODO inject
export default {
  name: 'ElButton',
  componentName: 'ElButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    icon: {
      type: String,
      default: ''
    },
    loading: Boolean,
    disabled: Boolean,
    autofocus: Boolean,
    size: String,
    nativeType: {
      type: String,
      default: 'button'
    }
  },
  data () {
    return {}
  },
  computed: {
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../theme-chalk/src/index";
</style>
