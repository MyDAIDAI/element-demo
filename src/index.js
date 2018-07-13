import Alert from '../packages/alert/index.js'
import Row from '../packages/row/index.js'
import Col from '../packages/col/index.js'
import Footer from '../packages/footer/index.js'
import Radio from '../packages/radio/index.js'

const components = [
  Alert,
  Row,
  Col,
  Footer,
  Radio
]
// 所有组件全局注册
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
  Alert,
  Row,
  Col,
  Footer,
  Radio
}
