import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

const wrapper = shallowMount(App);

describe("App", () => {
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
