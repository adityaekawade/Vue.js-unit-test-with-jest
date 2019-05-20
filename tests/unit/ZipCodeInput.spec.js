import { createLocalVue, mount } from '@vue/test-utils'
import ZipCodeInput from '@/components/ZipCodeInput.vue'
import vuetify from "vuetify"

describe('ZipCodeInput', () => {
  let wrapper;
  beforeEach(()=>{
    const localVue = createLocalVue()
    localVue.use(vuetify)

    wrapper = mount(ZipCodeInput, {
      localVue,
    })
  })

  it('Find input- type text ', ()=>{
    expect(wrapper.contains('[data-test="zipCodeText"]')).toBe(true)
  })
  it('has a button', ()=>{
    expect(wrapper.contains('button')).toBe(true)
  })
  it('Enter text and check the value of inputText', ()=>{
    var textInput = wrapper.find('[data-test="zipCodeText"]')
    textInput.setValue('84102');
    expect(wrapper.vm.inputText).toBe('84102')
  })
  it('click enter button and clear input', ()=>{
    wrapper.find('button').trigger("click");
    var textInput = wrapper.find('[data-test="zipCodeText"]')
    expect(textInput.text()).toMatch('')
    expect(wrapper.vm.inputText).toBe('')
  })
  it('Check emitted "save" event', ()=>{
    wrapper.vm.$emit('save', "84102");
    expect(wrapper.emitted().save).toBeTruthy()
  })

});
