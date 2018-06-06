/**
 * 触发指定子组件对应事件
 * @param componentName
 * @param eventName
 * @param params
 */
function broadcast (componentName, eventName, params) {
  this.$children.forEach(child => {
    let name = child.$options.componentName
    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params))
    } else {
      broadcast.apply(child, [componentName, eventName].concat(params))
    }
  })
}

/**
 * 触发指定父组件对应事件
 * @param componentName
 * @param eventName
 * @param params
 */
function dispatch (componentName, eventName, params) {
  let parent = this.$parent || this.$root
  let name = parent.$options.componentName
  while (parent && (!name || name !== componentName)) {
    parent = parent.$parent
    if (parent) {
      name = parent.$options.componentName
    }
  }
  if (parent) {
    parent.$emit.apply(parent, [eventName].concat(params))
  }
}
export default {
  methods: {
    dispatch (componentName, eventName, params) {
      dispatch.call(this, componentName, eventName, params)
    },
    broadcast (componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params)
    }
  }
}
