import { createTest, destroyVM } from '../util'
import Row from 'packages/Row'

describe('Row', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('create', function () {
    vm = createTest(Row, true)
    let rowElm = vm.$el
    expect(rowElm.classList.contains('el-row')).to.be.true
  })
  it('gutter', function () {
    vm = createTest(Row, {
      gutter: 20
    }, true)
    let rowElm = vm.$el
    expect(rowElm.style.marginLeft).to.be.equal('-10px')
    expect(rowElm.style.marginRight).to.be.equal('-10px')
  })
  it('tag', function () {
    vm = createTest(Row, {
      tag: 'ul'
    }, true)
    let rowElm = vm.$el
    expect(rowElm.tagName).to.be.equal('UL')
  })
  it('type', function () {
    vm = createTest(Row, {
      type: 'flex'
    }, true)
    let rowElm = vm.$el
    expect(rowElm.classList.contains('el-row--flex')).to.be.true
  })
  it('justify', function () {
    vm = createTest(Row, {
      justify: 'end'
    }, true)
    let rowElm = vm.$el
    expect(rowElm.classList.contains('is-justify-end')).to.be.true
  })
  it('align', function () {
    vm = createTest(Row, {
      align: 'bottom'
    }, true)
    let rowElm = vm.$el
    expect(rowElm.classList.contains('is-align-bottom')).to.be.true
  })
})
