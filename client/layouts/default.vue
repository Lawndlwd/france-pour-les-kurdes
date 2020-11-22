<template>
  <div>
    <Nav />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>

import Nav from "~/components/Nav";
import Footer from "~/components/Footer";
export default {
  components: {
    Nav,Footer
  }
};
</script>
<style>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 100%
}

body {
  box-sizing: border-box;
  font-family: "Tajawal", sans-serif;
  font-weight: 400;
  line-height: 1.7;
  padding: 1.1rem;
  color: #777;
  background-color: #f7f7f7;
}
@media screen and (max-width: 768px) {
  html {
    font-size: 35.5%;
  }
}
</style>
