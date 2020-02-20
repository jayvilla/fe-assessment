import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

const wrapper = shallowMount(App);

describe('App', () => {
    it('has been instantiated', () => {
        expect(typeof wrapper).toBe('object');
    })
})