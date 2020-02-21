import { shallowMount } from "@vue/test-utils";
import ProductList from "@/components/ProductList.vue";

const wrapper = shallowMount(ProductList);

describe("ProductList", () => {
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
