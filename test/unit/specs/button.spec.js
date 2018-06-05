import { createTest, destroyVM, createVue } from '../util'
import Button from 'packages/button'

describe('button', function () {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('create', () => {
    vm = createTest(Button, true)
    expect(vm.$el).to.exist
  })
  it('type', () => {
    vm = createTest(Button, {
      type: 'primary'
    }, true)
    expect(vm.$el.classList.contains('el-button--primary')).to.be.true
  })
  it('disabled', () => {
    vm = createTest(Button, {
      disabled: true
    }, true)
    expect(vm.$el.classList.contains('is-disabled')).to.be.true
  })
  it('loading', () => {
    vm = createTest(Button, {
      icon: 'el-icon-search'
    }, true)
    expect(vm.$el.querySelector('.el-icon-search')).to.be.ok
  })
  it('size', () => {
    vm = createTest(Button, {
      size: 'medium'
    }, true)
    expect(vm.$el.classList.contains('el-button--medium')).to.be.true
  })
  it('plain', () => {
    vm = createTest(Button, {
      plain: true
    }, true)
    expect(vm.$el.classList.contains('is-plain')).to.be.true
  })
  it('round', () => {
    vm = createTest(Button, {
      round: true
    }, true)
    expect(vm.$el.classList.contains('is-round')).to.be.true
  })
  it('circle', () => {
    vm = createTest(Button, {
      circle: true
    }, true)
    expect(vm.$el.classList.contains('is-circle')).to.be.true
  })
  it('nativeType', () => {
    vm = createTest(Button, {
      nativeType: 'submit'
    }, true)
    expect(vm.$el.getAttribute('type')).to.be.equal('submit')
  })
  it('click', (done) => {
    let result
    vm = createVue({
      template: `
        <el-button @click="handleClick"></el-button>
      `,
      methods: {
        handleClick (evt) {
          result = evt
        }
      }
    }, true)
    vm.$el.click()
    setTimeout(_ => {
      expect(result).to.exist
      done()
    }, 20)
  })
})
