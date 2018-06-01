import { createTest, destroyVM } from '../util'
import Container from 'packages/container'

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
