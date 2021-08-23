import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Avatar from '@/components/Avatar.vue'
import Back from '@/components/Back.vue'
import Button from '@/components/Button.vue'
import Number from '@/components/Number.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

describe('Avatar.vue', () => {
  let cmp

  beforeEach(() => {
    cmp = shallowMount(Avatar, {
      props: {
        firstName: 'Sulemy',
        lastName: 'Rodriguez'
      }
    })
  })

  it('Tiene la estructura HTML esperada', () => {
    expect(cmp.element).toMatchSnapshot()
  })

  it('Valida funcionalidad del computado abbreviationFirstName', () => {
    const props = {
      firstName: 'Sulemy'
    }
    expect(Avatar.computed.abbreviationFirstName.call(props)).toEqual('S')
  })

  it('Valida funcionalidad del computado abbreviationLastName', () => {
    const props = {
      lastName: 'Rodriguez'
    }
    expect(Avatar.computed.abbreviationLastName.call(props)).toEqual('R')
  })
})

describe('Back.vue', () => {
  it('Tiene la estructura HTML esperada', () => {
    const wrapper = shallowMount(Back)
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('Button.vue', () => {
  it('Tiene la estructura HTML esperada', () => {
    const wrapper = shallowMount(Button)
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('Number.vue', () => {
  it('Tiene la estructura HTML esperada', () => {
    const wrapper = shallowMount(Number)
    expect(wrapper.element).toMatchSnapshot()
  })
})
