export const state = () => {
  return {
    loadedProfiles: [],
    homePage: {},
    user: {}
  };
};
export const mutations = {
  setProfiles(state, profiles) {
    state.loadedProfiles = profiles;
  },
  setHomePage(state, home) {
    state.homePage = home;
  },
  setUser(state, user) {
    state.user = user;
  }
};
export const actions = {
  async nuxtServerInit(vuexContext, { $axios, $auth }) {
    try {
      const users = await $axios.$get("/api/auth/profiles");
      const result = await $axios.$get("/api/home");
      vuexContext.dispatch("setHomePage", result.home[0]);
      vuexContext.dispatch("setProfiles", users);
    } catch (error) {
      console.log(error);
    }
  },
  setProfiles(context, profiles) {
    context.commit("setProfiles", profiles);
  },
  setHomePage(context, home) {
    context.commit("setHomePage", home);
  },
  async changeUser(context, data) {
    try {
      const result = await this.$axios.$put("/api/auth/profile", data);
      const users = await this.$axios.$get("/api/auth/profiles");
      context.dispatch("setProfiles", users);
      context.dispatch("setUser", result.user)
      console.log(context)
    } catch (error) {
      console.log(error);
    }
  },
  setUser(context, user) {
    context.commit("setUser", user);
  }
};
export const getters = {
  profiles(state) {
    return state.loadedProfiles;
  },
  home(state) {
    return state.homePage;
  },
  user(state) {
    return state.user;
  }
};
