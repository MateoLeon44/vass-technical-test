import { shallowMount } from "@vue/test-utils";
import CreateTodo from "@/components/newTodo/CreateTodo.vue";

describe("CreateTodo.vue", () => {
  it("Sets data correctly", () => {
    const todoContent = "mock props";
    const wrapper = shallowMount(CreateTodo);
    wrapper.setData({ todoContent });

    expect(wrapper.vm.$data.todoContent).toEqual(todoContent);
  });

  it("Creates todo", () => {
    const todoContent = "";
    const wrapper = shallowMount(CreateTodo);
    wrapper.setData({ todoContent });
  });
});
