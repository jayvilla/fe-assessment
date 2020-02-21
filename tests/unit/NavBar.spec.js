import { shallowMount } from '@vue/test-utils';
import NavBar from '@/components/NavBar.vue';

const wrapper = shallowMount(NavBar);

describe('NavBar', () => {
    it('renders', () => {
        expect(wrapper.exists()).toBe(true);
    })
})