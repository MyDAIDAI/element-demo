<template>
  <section class="el-container" :class="{'is-vertical': isVertical}">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'ElContainer',
  data () {
    return {
    }
  },
  props: {
    direction: String
  },
  computed: {
    isVertical () {
      if (this.direction === 'vertical') {
        return true
      } else if (this.direction === 'horizontal') {
        return false
      }
      // 判断slot中的组件标签名
      return this.$slots && this.slots.default
        ? this.$slots.default.some(vnode => {
          const tag = vnode.componentOptions && vnode.componentOptions.tag
          return tag === 'el-header' || tag === 'el-footer'
        })
        : false
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../theme-chalk/src/index";
</style>
