import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import Home from '@/components/Home.vue'
import vuetify from "vuetify"

describe('Home.vue', () => {
  let wrapper;
  let title = 'Weather App'
  beforeEach(()=>{
    const localVue = createLocalVue()
    localVue.use(vuetify)

    wrapper = shallowMount(Home, {
      localVue
    });
  })

  it('renders a vue instance', () => {
      expect(shallowMount(Home).isVueInstance()).toBe(true);
    });

    it('Checks the data-title', () => {
    expect(wrapper.vm.title).toMatch('Weather App')
  })

  it('has an h2', ()=>{
    expect(wrapper.contains('h2')).toBe(true)
  })

})
