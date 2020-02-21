import { shallowMount } from "@vue/test-utils";
import Products from "@/components/Products.vue";

const wrapper = shallowMount(Products);

describe("Products", () => {
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
