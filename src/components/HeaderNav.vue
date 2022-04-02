<template>
  <header class="flex w-full items-center justify-center p-4">
    <div
      :class="`menu-toggle relative z-50 ${menu_is_active ? 'is-active' : ''}`"
      @click="ToggleMenu"
    >
      <div class="hamburger">
        <span></span>
      </div>
    </div>
    <h1 class="text-center text-2xl uppercase font-light tracking-widest">
      Sanity News
    </h1>
  </header>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const ToggleMenu = () => {
      store.dispatch("ToggleMenu");
    };
    return {
      menu_is_active: computed(() => store.state.menu_is_active),
      ToggleMenu,
    };
  },
};
</script>
