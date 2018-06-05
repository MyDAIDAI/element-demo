import { createTest, createVue, destroyVM } from '../util'
import Container from 'packages/container'
import Header from 'packages/header'
import Aside from 'packages/aside'
import Main from 'packages/main'
import Footer from 'packages/footer'

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

describe('Aside', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('create', function () {
    vm = createTest(Aside, true)
    expect(vm.$el).to.exist
  })
  it('width', function () {
    vm = createTest(Aside, {
      width: '200px'
    }, true)
    expect(vm.$el.style.width).to.equal('200px')
  })
})

describe('Main', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('create', function () {
    vm = createTest(Main, true)
    expect(vm.$el).to.exist
  })
})

describe('Footer', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('create', function () {
    vm = createTest(Footer, true)
    expect(vm.$el).to.exist
  })
  it('height', function () {
    vm = createVue({
      template: `
        <el-footer height="100px"></el-footer>
      `
    }, true)
    expect(vm.$children[0].$el.style.height).to.equal('100px')
  })
})
