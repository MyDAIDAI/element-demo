import Alert from '../packages/alert/index.js'

const components = [
  Alert
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
  const ELEMENT = {}
  ELEMENT.size = opts.size || ''
  Vue.prototype.$ELEMENT = ELEMENT
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = {
  install,
  Alert
}
