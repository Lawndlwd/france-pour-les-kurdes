export const state = () => {
  return {
    loadedProfiles: [],
    homePage: {}
  };
};
export const mutations = {
  setProfiles(state, profiles) {
    state.loadedProfiles = profiles;
  },
  setHomePage(state, home) {
    state.homePage = home;
  }
};
export const actions = {
  async nuxtServerInit(vuexContext, { $axios }) {
    try {
      const users = await $axios.$get("/api/auth/profiles");
      const result = await $axios.$get("/api/home");
      vuexContext.commit("setHomePage", result.home[0]);
      vuexContext.commit("setProfiles", users);
    } catch (error) {
      console.log(error);
    }
  }
};
export const getters = {
  profiles(state) {
    return state.loadedProfiles;
  },
  home(state) {
    return state.homePage;
  }
};
