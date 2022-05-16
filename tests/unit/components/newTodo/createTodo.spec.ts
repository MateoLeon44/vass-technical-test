import { shallowMount, Wrapper } from "@vue/test-utils";
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
    const wrapper: Wrapper<CreateTodo & { [key: string]: any }> =
      shallowMount(CreateTodo);
    wrapper.setData({ todoContent });

    wrapper.vm.createTodo();
    expect(wrapper.vm.$data.todoContent).toEqual("");
  });
});
