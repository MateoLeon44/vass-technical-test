<template>
  <label :for="id" @dblclick="changeEditedTodo">
    {{ content }}
  </label>
</template>

<script lang="ts">
import Vue from "vue";
import { vuexTypes } from "@/store/vuex.types";

export default Vue.extend({
  props: {
    id: {
      type: Number,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  methods: {
    changeEditedTodo: function () {
      this.$store.dispatch(vuexTypes.CHANGE_EDITED_TODO, this.id);
    },
  },
});
</script>
