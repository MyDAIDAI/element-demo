import Radio from './src/radio'
// 单个组件注册
Radio.install = function (Vue) {
  Vue.component(Radio.name, Radio)
}
export default Radio
