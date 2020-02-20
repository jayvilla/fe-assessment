import { shallowMount } from '@vue/test-utils';
import Products from '@/components/Products.vue';

const wrapper = shallowMount(Products);

describe('Products', () => {
    it('has been instantiated', () => {
        expect(typeof wrapper).toBe('object');
    })
})