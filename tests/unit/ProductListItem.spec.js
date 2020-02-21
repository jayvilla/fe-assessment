import { shallowMount } from "@vue/test-utils";
import ProductListItem from "@/components/ProductListItem.vue";

const wrapper = shallowMount(ProductListItem, {
  propsData: {
    product: {
      id: "urban-summer-outdoor-2-piece-chaise-sectional-h5281",
      name: "Urban Outdoor 2-Piece Chaise Sectional",
      links: {
        www:
          "https://www.westelm.com/products/urban-summer-outdoor-2-piece-chaise-sectional-h5281/"
      },
      price: { regular: 2799, selling: 2799 },
      thumbnail: {
        size: "m",
        meta: "",
        alt: "",
        rel: "thumbnail",
        width: 363,
        href:
          "https://www.westelm.com/weimgs/ab/images/wcm/products/202005/0003/urban-summer-outdoor-2-piece-chaise-sectional-m.jpg",
        height: 363
      },
      hero: {
        size: "m",
        meta: "",
        alt: "",
        rel: "hero",
        width: 363,
        href:
          "https://www.westelm.com/weimgs/ab/images/wcm/products/202005/0001/urban-summer-outdoor-2-piece-chaise-sectional-m.jpg",
        height: 363
      },
      images: [
        {
          size: "m",
          meta: "",
          alt: "",
          rel: "althero",
          width: 363,
          href:
            "https://www.westelm.com/weimgs/ab/images/wcm/products/202003/0015/urban-summer-outdoor-2-piece-chaise-sectional-2-m.jpg",
          height: 363
        },
        {
          size: "m",
          meta: "",
          alt: "",
          rel: "althero",
          width: 363,
          href:
            "https://www.westelm.com/weimgs/ab/images/wcm/products/202003/0015/urban-summer-outdoor-2-piece-chaise-sectional-4-m.jpg",
          height: 363
        },
        {
          size: "m",
          meta: "",
          alt: "",
          rel: "althero",
          width: 363,
          href:
            "https://www.westelm.com/weimgs/ab/images/wcm/products/202005/0001/urban-summer-outdoor-2-piece-chaise-sectional-1-m.jpg",
          height: 363
        },
        {
          size: "m",
          meta: "",
          alt: "",
          rel: "althero",
          width: 363,
          href:
            "https://www.westelm.com/weimgs/ab/images/wcm/products/202003/0015/urban-summer-outdoor-2-piece-chaise-sectional-3-m.jpg",
          height: 363
        },
        {
          size: "m",
          meta: "",
          alt: "",
          rel: "althero",
          width: 363,
          href:
            "https://www.westelm.com/weimgs/ab/images/wcm/products/202003/0015/urban-summer-outdoor-2-piece-chaise-sectional-1-m.jpg",
          height: 363
        },
        {
          size: "m",
          meta: "",
          alt: "",
          rel: "althero",
          width: 363,
          href:
            "https://www.westelm.com/weimgs/ab/images/wcm/products/202003/0015/urban-summer-outdoor-2-piece-chaise-sectional-m.jpg",
          height: 363
        }
      ],
      swatches: [],
      messages: [],
      flags: [
        { bopisSuppress: false, rank: 3, id: "newcore" },
        { bopisSuppress: false, rank: 10, id: "handcrafted" }
      ],
      reviews: {
        recommendationCount: 0,
        likelihood: 0,
        reviewCount: 0,
        averageRating: 0,
        id: "urban-summer-outdoor-2-piece-chaise-sectional-h5281",
        type: "GROUP_REVIEWS"
      }
    }
  }
});

describe("ProductListItem", () => {
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
