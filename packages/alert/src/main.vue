<template>
  <div
    class="el-alert"
    :class="[typeClass, center ? 'is-center' : '']"
    v-show="visible"
    role="alert">
    <i class="el-alert__icon" :class="[iconClass, isBigIcon]" v-if="showIcon"></i>
    <div class="el-alert__content">
      <span class="el-alert__title" :class="[isBoldTitle]" v-if="title">{{title}}</span>
      <slot>
        <p class="el-alert__description" v-if="description">{{description}}</p>
      </slot>
      <i class="el-alert__closebtn" :class="{'is-customed': closeText !== '', 'el-icon-close': closeText === ''}" v-show="closable" @click="close()">{{closeText}}</i>
    </div>
  </div>
</template>

<script>
const TYPE_CLASS_MAP = {
  'success': 'el-icon-success',
  'warning': 'el-icon-warning',
  'error': 'el-icon-error'
}
export default {
  name: 'ElAlert',
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'info'
    },
    closable: {
      type: Boolean,
      default: true
    },
    closeText: {
      type: String,
      default: ''
    },
    showIcon: Boolean,
    center: Boolean
  },
  data () {
    return {
      visible: true
    }
  },
  computed: {
    typeClass () {
      return `el-alert--${this.type}`
    },
    iconClass () {
      return TYPE_CLASS_MAP[this.type] || 'el-icon-info'
    },
    isBigIcon () {
      return this.description || this.$slots.default ? 'is-big' : ''
    },
    isBoldTitle () {
      return this.description || this.$slots.default ? 'is-bold' : ''
    }
  },
  methods: {
    close () {
      this.visible = false
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../theme-chalk/src/index";
</style>
