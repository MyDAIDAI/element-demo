<template>
  <button
    class="el-button"
    :class="[
    type ? 'el-button--' + type : '',
    buttonSize ? 'el-button--' + buttonSize : '',
    {
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': buttonDisabled
    }]"
    :disabled="buttonDisabled"
    :autofocus="autofocus"
    :type="nativeType"
    @click="handleClick"
  >
    <i class="el-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
  </button>
</template>

<script>
export default {
  name: 'ElButton',
  componentName: 'ElButton',
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
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
    _elFormItemSize () {
      return (this.elFormItem || {}).elFormItemSize;
    },
    buttonSize () {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size
    },
    buttonDisabled () {
      return this.disabled || (this.elForm || {}).disabled
    }
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
