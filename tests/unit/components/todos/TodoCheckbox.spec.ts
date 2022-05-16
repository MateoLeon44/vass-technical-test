import { mount, Wrapper } from "@vue/test-utils";
import TodoCheckbox from "@/components/todos/TodoCheckbox.vue";
import Todo from "@/types/Todo.class";

describe("TodoCheckbox.vue", () => {
  it("Creates input correctly", async () => {
    const wrapper: Wrapper<TodoCheckbox & { [key: string]: any }> = mount(
      TodoCheckbox,
      {
        propsData: {
          todo: new Todo("mock-content", true),
          id: 0,
        },
      }
    );

    expect(wrapper.find(".toggle").exists()).toBeTruthy();
    expect(wrapper.find(".hidden").exists()).toBeFalsy();
    expect(wrapper.find("input").exists()).toBeTruthy();
    expect(wrapper.find("input").props().todo["isChecked"]).toEqual(true);
  });
});
