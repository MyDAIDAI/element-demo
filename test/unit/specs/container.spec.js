import { createTest, destroyVM } from '../util'
import Container from 'packages/container'
import Header from 'packages/header'

describe('Container', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('create', function () {
    vm = createTest(Container, true)
    expect(vm.$el).to.exist
  })
  it('vertical', function () {
    vm = createTest(Container, {
      direction: 'vertical'
    }, true)
    expect(vm.$el.classList.contains('is-vertical')).to.true
  })
})

describe('Header', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('create', function () {
    vm = createTest(Header, true)
    expect(vm.$el).to.exist
  })
  it('height', function () {
    vm = createTest(Header, {
      height: '100px'
    }, true)
    expect(vm.$el.style.height).to.equal('100px')
  })
})
