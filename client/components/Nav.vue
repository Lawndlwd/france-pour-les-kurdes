<template>
  <div class="navigation">
    <div
      class="navigation__button"
      :class="nav ? 'navigation____button--close' : ''"
      @click="openNav"
    >
      <span
        class="navigation__icon"
        :class="nav ? 'navigation____icon--close' : ''"
        >&nbsp;</span
      >
    </div>
    <div
      class="navigation__background"
      :class="nav ? 'navigation__background--active' : ''"
    >
      &nbsp;
    </div>
    <nav class="navigation__nav" :class="nav ? 'navigation__nav--active' : ''">
      <ul class="navigation__list">
        <li class="navigation__item">
          <nuxt-link to="#" @click.native="openNav" class=" navigation__link">الاعضاء</nuxt-link>
        </li>
        <li class="navigation__item">
          <nuxt-link to="/"  @click.native="openNav" class="  navigation__link">معلومات</nuxt-link>
        </li>
        <li class="navigation__item" v-if="$auth.loggedIn" >
          <nuxt-link to="/"     class=" navigation__link" @click.native="openNav();$auth.logout()"
            >تسجيل الخروج</nuxt-link
          >
        </li>
        <li class="navigation__item" v-else>
          <nuxt-link to="/signup"  @click.native="openNav" class=" navigation__link"
            >الدخول/التسجيل كعضو</nuxt-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Signup from "../components/Signup";

export default {
  components: {
    Signup
  },
  data() {
    return {
      nav: false,
    };
  },
  methods: {
    openNav() {
      this.nav = !this.nav;
    }
  }
};
</script>

<style lang="scss"></style>
