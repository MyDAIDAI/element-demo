import { createVue, destroyVM } from '../util'

describe('Radio', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('create', done => {
    vm = createVue({
      template: `
        <el-radio v-model="radio" label="a"></el-radio>
      `,
      data () {
        return {
          radio: ''
        }
      }
    }, true)
    let radioElm = vm.$el
    expect(radioElm.classList.contains('el-radio')).to.be.true
    radioElm.click()
    setTimeout(_ => {
      expect(radioElm.querySelector('.is-checked')).to.be.ok
      expect(vm.radio === 'a').to.be.true
      done()
    }, 10)
  })
  it('disabled', done => {
    vm = createVue({
      template: `
        <el-radio
          v-model="radio"
          label="3"
          disabled>
        </el-radio>
      `,
      data () {
        return {
          radio: ''
        }
      }
    }, true)
    let radioElm = vm.$el
    radioElm.click()
    setTimeout(() => {
      expect(vm.radio === '').to.be.true
      expect(radioElm.querySelector('.is-disabled')).to.be.ok
      done()
    }, 10)
  })
  it('change event', done => {
    vm = createVue({
      template: `
        <el-radio
          v-model="radio"
          label="3"
          @change="handleChange"
        >
        </el-radio>
      `,
      data () {
        return {
          radio: '',
          data: ''
        }
      },
      methods: {
        handleChange (val) {
          this.data = val
        }
      }
    }, true)
    let radioElm = vm.$el
    radioElm.click()
    setTimeout(() => {
      expect(vm.data).to.equal('3')
      done()
    }, 10)
  })
  it('change event only triggers on user input', done => {
    vm = createVue({
      template: `
        <el-radio
          v-model="radio"
          label="3"
          @change="handleChange"
        >
        </el-radio>
      `,
      data () {
        return {
          radio: '3',
          data: ''
        }
      },
      methods: {
        handleChange (val) {
          this.data = val
        }
      }
    }, true)
    vm.radio = 3
    setTimeout(_ => {
      expect(vm.data).to.equal('')
      done()
    }, 10)
  })
})
