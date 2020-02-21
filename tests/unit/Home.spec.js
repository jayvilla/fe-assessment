import { shallowMount } from '@vue/test-utils';
import Home from '@/components/Home.vue';

const wrapper = shallowMount(Home);

describe('Home', () => {
    it('renders', () => {
        expect(wrapper.exists()).toBe(true);
    })
})