import { createStore } from "vuex";

export default createStore({
  state: {
    menu_is_active: false,
    posts: [],
    authors: [],
    total_posts: 0,
  },
  getters: {},
  mutations: {
    TOGGLE_MENU(state, dir = null) {
      if (dir === "open") {
        state.menu_is_active = true;
      } else if (dir === "clse") {
        state.menu_is_active = false;
      } else {
        state.menu_is_active = !state.menu_is_active;
      }
    },
  },
  actions: {
    // eslint-disable-next-line
    ToggleMenu({ commit }) {
      this.commit("TOGGLE_MENU");
    },
  },
  modules: {},
});
