<template>
  <label
    class="el-checkbox"
    :class="[
      border && checkboxSize ? 'el-checkbox--' + checkboxSize : '',
      {'is-disabled': isDisabled},
      {'is-bordered': border},
      {'is-checked': isChecked}
    ]"
    role="checkbox"
    :aria-checked="indeterminate ? 'mixed' : isChecked"
    :aria-disabled="isDisabled"
    :id="id">
    <span class="el-check__input"
      :class="{
        'is-disabled': isDisabled,
        'is-checked': isChecked,
        'is-indeterminate': indeterminate,
        'is-focus': focus
      }">
      <span class="el-checkbox__inner"></span>
      <!--根据是否提供trueLabel与falseLabel渲染不同的组件，其保存的值不同-->
      <input
        v-if="trueLabel || falseLabel"
        class="el-checkbox__original"
        type="checkbox"
        aria-hidden="true"
        :name="name"
        :disabeld="isDisabled"
        v-model="model"
        :true-value="trueLabel"
        :false-value="falseLabel"
        @change="handleChange"
        @focus="focus = true"
        @blur="focus = false"/>
      <input
        v-else
        class="el-checkbox__original"
        type="checkbox"
        aria-hidden="true"
        :name="name"
        :disabeld="isDisabled"
        :value="label"
        v-model="model"
        @change="handleChange"
        @focus="focus = true"
        @blur="focus = false"/>
    </span>
    <span class="el-checkbox__label" v-if="$slots.default || label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'ElCheckbox',
  componentName: 'ElCheckbox',
  props: {
    value: {},
    label: {},
    indeterminate: Boolean,
    disabled: Boolean,
    checked: Boolean,
    name: String,
    trueLabel: [String, Number],
    falseLabel: [String, Number],
    id: String,
    controls: String,
    border: Boolean,
    size: String
  },
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
  data () {
    return {
      focus: false,
      selfModel: false,
      isLimitExceeded: false
    }
  },
  computed: {
    isGroup () {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.componentName !== 'ElCheckboxGroup') {
          parent = parent.$parent
        } else {
          this._checkboxGroup = parent
          return true
        }
      }
      return false
    },
    store () {
      return this._checkboxGroup ? this._checkboxGroup.value : this.value
    },
    isChecked () {
      if ({}.toString.call(this.model) === '[object Boolean]') {
        return this.model
      } else if (Array.isArray(this.model)) {
        return this.model.indexOf(this.label) > -1
      } else if (this.model !== null || this.model !== undefined) {
        return this.model === this.trueLabel
      }
    },
    model: {
      get () {
        return this.isGroup ? this.store : this.value !== undefined ? this.value : this.selfModel
      },
      set (val) {
        if (this.isGroup) {
          this.isLimitExceeded = false
          (this._checkboxGroup.min !== undefined &&
            val.length < this._checkboxGroup.min &&
            (this.isLimitExceeded = true))
          (this._checkboxGroup.max !== undefined &&
            val.length > this._checkboxGroup.max &&
            (this.isLimitExceeded = true))
          this.isLimitExceeded === false && this.dispatch('ElCheckboxGroup', 'input', val)
        } else {
          this.$emit('input', val)
          this.selfModel = val
        }
      }
    },
    isDisabled () {
      return this.isGroup
        ? this._checkboxGroup.disabled || this.disabled || (this.elForm || {}).disabled
        : this.disabled || (this.elForm || {}).disabled
    },
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>
