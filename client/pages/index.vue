<template>
  <div>
    <header class="head">
      <div class="logo">
        <img class="logo__img" src="/captain.png" alt="logo" />
      </div>
      <div class="head__contain--text col-12">
        <h1 class="header-primery">
          <span class="header-primery--main d-block">أبجد هوز حطى كلمن </span>
          <span class="header-primery--sub d-block">
            .أبجد هوز حطى كلمن هوى إجراءات المراقبة المعززة التوازن
          </span>
        </h1>
      </div>
    </header>

    <main class="main">
      <section class="main__info">
        <div class="container-fluid">
          <div class="text-center mb-5">
            <h2 class="heading-secondary">
              Exiting tour for adventurous people
            </h2>
          </div>
          <div class="row ">
            <div class="col-4 main__info--img"></div>
            <div class="col-5 main__info--text">fgsfg</div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss" scoped>
//heading spcial stayle
.head {
  color: white;
  position: relative;
  background-image: linear-gradient(
      to right bottom,
      rgba(147, 111, 213, 0.8),
      rgba(112, 40, 180, 0.8)
    ),
    url("https://cdn.pixabay.com/photo/2019/10/14/15/27/alpine-4549189_1280.jpg");
  background-size: cover;
  background-position: top;
  height: 65vh;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
  z-index: 10;

  &__contain {
    &--text {
      text-align: center;
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);
    }
  }
}

.logo {
  position: absolute;
  left: 1.7rem;
  top: 1rem;
  &__img {
    height: 100px;
  }
}

.header-primery {
  line-height: 8.5rem;
  &--main {
    font-size: 6rem;
    font-weight: 400;
    // word-spacing: 1.1rem;
    // animation-name: moveInLeft;
    // animation-duration: 0.9s;
    // animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  &--sub {
    font-size: 2rem;
    font-weight: 700;
    word-spacing: 1.1rem;
    // animation: moveInRight 0.9s cubic-bezier(0.075, 0.82, 0.165, 1);
    // -webkit-animation: moveInRight 0.9s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
}

.main__info {
  background-color: #f6f6f6;
  margin-top: -10rem;
  height: 1000px;
  padding: 15rem 0;
  & .row {
    margin-top: 10rem;
  }
}
</style>
