<template>
  <label
    class="el-radio"
    :class="[
      border && radioSize ? 'el-radio--' + radioSize : '',
      {'is-disabled': isDisabled},
      {'is-bordered': border},
      {'is-checked': model === label}
    ]"
    role="radio"
    :aria-disabled="isDisabled"
    :tabindex="tabIndex">
    <span class="el-radio__input"
      :class="{
        'is-disabled': isDisabled,
        'is-checked': model === label
      }">
      <span class="el-radio__inner"></span>
      <input
        class="el-radio__original"
        :value="label"
        type="radio"
        aria-hidden="true"
        v-model="model"
        @focus="focus = true"
        @blur="focus = false"
        @change="handleChange"
        :name="name"
        :disabled="isDisabled"
        tabindex="-1">
    </span>
    <span class="el-radio__label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
import Emitter from '@/mixins/emitter'
export default {
  name: 'ElRadio',
  componentName: 'ElRadio',
  props: {
    value: {},
    label: {},
    disabled: Boolean,
    border: Boolean,
    size: String,
    name: String
  },
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
  mixin: [Emitter],
  data () {
    return {
      focus: false
    }
  },
  computed: {
    isGroup () {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.componentName !== 'ElRadioGroup') {
          parent = parent.$parent
        } else {
          this._radioGroup = parent
          return true
        }
      }
      return false
    },
    model: {
      get () {
        return this.isGroup ? this._radioGroup.value : this.value
      },
      set (val) {
        // 根据isGroup的值触发不同的input事件
        if (this.isGroup) {
          this.dispatch('ElRadioGroup', 'input', val)
        } else {
          this.$emit('input', val)
        }
      }
    },
    _elFormItemSize () {
      return (this.elFormItem || {}).size
    },
    radioSize () {
      // 根据优先级获取其size值
      const temRadioSize = this.size || this._elFormItemSize || (this.$ELEMENT || {}).size
      return this.isGroup
        ? this._radioGroup.radioGroupSize || temRadioSize
        : temRadioSize
    },
    isDisabled () {
      return this.isGroup
        ? this._radioGroup.disabled || this.disabled || (this.elForm || {}).disabled
        : this.disabled || (this.elForm || {}).disable
    }
  },
  mounted () {
    console.log('value', this.value)
  },
  methods: {
    handleChange () {
      this.$nextTick(() => {
        this.$emit('change', this.model)
        this.isGroup && this.dispatch('ElRadioGroup', 'handleChange', this.model)
      })
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../theme-chalk/src/index";
</style>
