<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {};
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
  font-size: 62.5%;
}

body {
  box-sizing: border-box;
  font-family: "Tajawal", sans-serif;
  font-weight: 400;
  line-height: 1.7;
  padding: 3rem;
  color: #777;
}
@media screen and (max-width: 768px) {
  html {
    font-size: 35.5%;
  }
}
</style>
