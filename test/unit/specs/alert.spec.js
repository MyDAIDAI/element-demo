import { createTest, destroyVM } from '../util'
import Alert from 'packages/alert'

describe('Alert', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('create', () => {
    vm = createTest(Alert, {
      title: 'test',
      showIcon: true
    }, true)
    expect(vm.$el.querySelector('.el-alert__title').textContent).to.equal('test')
    expect(vm.$el.classList.contains('el-alert--info')).to.true
  })

  it('type', () => {
    vm = createTest(Alert, {
      title: 'test',
      type: 'success',
      showIcon: true
    }, true)
    expect(vm.$el.classList.contains('el-alert--success')).to.true
  })

  it('icon', () => {
    vm = createTest(Alert, {
      title: 'icon',
      type: 'success',
      showIcon: true
    }, true)
    expect(vm.$el.querySelector('.el-icon-success').tagName).to.equal('I')
  })

  it('description', () => {
    vm = createTest(Alert, {
      title: 'Dorne',
      description: 'Unbowed, Unbent, Unbroken',
      showIcon: true
    }, true)
    expect(vm.$el.querySelector('.el-alert__description').textContent)
      .to.equal('Unbowed, Unbent, Unbroken')
  })

  it('center', () => {
    vm = createTest(Alert, {
      title: 'center',
      center: true
    }, true)
    expect(vm.$el.classList.contains('is-center')).to.true
  })

  it('close', () => {
    vm = createTest({
      template: `
        <div>
          <el-alert
            title="test"
            close-text="close"></el-alert>
         </div>
      `
    }, true)
    vm.$el.querySelector('.el-alert__closebtn').click()
    expect(vm.$children[0].visible).to.false
  })
})
