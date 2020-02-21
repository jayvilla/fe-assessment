import { shallowMount } from '@vue/test-utils';
import Carousel from '@/components/Carousel.vue';

const wrapper = shallowMount(Carousel, {
    propsData: {
        images: [
            {
                "size": "m",
                "meta": "",
                "alt": "",
                "rel": "althero",
                "width": 363,
                "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/202003/0015/urban-summer-outdoor-2-piece-chaise-sectional-2-m.jpg",
                "height": 363
            }
        ]
    }
});

describe('Carousel', () => {
    it('renders', () => {
        expect(wrapper.exists()).toBe(true);
    })
})