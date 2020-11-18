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
            <h1 class="heading-secondary">
              إجراءات المراقبة المعززة
            </h1>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm-8 col-md-6 mb-sm-5 h-custom">
                <div class="composition">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/fr/thumb/c/cb/Caisse_d_allocations_familiales_france_logo.svg/1024px-Caisse_d_allocations_familiales_france_logo.svg.png"
                    alt="nat"
                    class="composition__photo composition__photo--p1"
                  />
                  <img
                    src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fi.forbesimg.com%2Fmedia%2Flists%2Fcompanies%2Fcredit-agricole_416x416.jpg"
                    alt="nat-3"
                    class="composition__photo composition__photo--p2"
                  />
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT8AAACeCAMAAABzT/1mAAAAw1BMVEX///8ZW6UTWaQKVqMAUKAAVKIATJ8AUqH2+PsATqDv9frL1+jl6vLe5/MsZKyAn8k2bq9wk8Mxaq7X3+2Qqc60w91pir2IoMi/zeJGcrBdhbumuthOerXu89/8/PbW4q6dstPT4abr8tfF14sAQZoAPZnw9fPq8eM+b6ckYaC4zIxUgLBojayhvJIlYrCtxI/V4cDG16jU3txKfH8AM5eSqsdoj5OKqJ2BoK5Bc52at3qovbcFWZCVsJEwbYKetbvb5dMwkYWTAAASTklEQVR4nO1diZajOJYFrSwCbDZjILOprKi1t+l19un5/68avScJsI0jndnhiQyH7jmVhUFmuX56u4gg8PDw8PDw8PDw8PDw8PDw8Lg/ohT/fe3beGtoaqX/0xsDSfS/OexL1Ove09tBNDZZFFR7vdkPg2ZuhL312NavfGPfPppBy9uhg01gTRVBHwRZC5/7KEhe9+a+eURj15EqGM1MPQbBNO5zFaQHOJZP1eve3TcObSQmLXjZLihQ/oIxCvokGCYtlPpTta9qL39XEfVayAqQsKNSoQqqLBiTSKvApNCaTxM7da99i9802iwIjMnVs7fqx2JtbaMqDeq2Tl/p3t4C9lPaRUGZBml/ZQSQ6HEV0zSVQdKO3kf5IqhhCS5ab2C/GOrQ2q1sap8d6bGFqXDhbecN7FegaZ275/HlKKKgzr1Z/VrsQfL6Liia176TN4lDibwdez+BvwbpFIwQ2Srvtnw1eu8ufyUik6Vqp4sD3eAzzTegCtHwnuekojxmBI74fP1nEG3GujULQ0K6ggsh8qLzpaNNJBPkqw421/Lx04Lf0lCDcfiXSBHuu58+bePjqz7BqyLqmxEkKzMfP3z3G4fvfidDB0p2uRRP4V9+/5stfHjVR3hV7KtgaA+bgYfKY0oI0gfSGVVNWz79oR38RF6h2XV7lRbb9Yy079tcM8hmflUt/nrmYyfd0LzjckjUjleePkvB7gJ/8coAXwzWVjrO73Rz3zqQjLTcjNp6EYuwHjR9hD7jwGRCT/D4ncZ90w7i3miLHgW8hBytb/7M/CxgBHuvgV9S58P2kSyerS85PnOGPXg5vGjerX/Ybs894I9INL98/8zXJ4YWWjI63eX2vmEkI9hVddg8WGn+eAcuDBXZ6aGpX8lsNkspu2aIHhZVu2uS/bbuSlnItHLs2mNr1GMzjo624gdaVzBfo6om4TLPybtLYKu6v5JxHqRcB8X7khEiLIFRWtMnVu5KLuSaPhJP977hbwjq2Vz9kZarT6kgaCbmHdFwFLG08YlB2cah2FYGDwnsETr3hz9adDEZPy7okSey+3G178fub7/9+RfuJJDsgpTLd5SFbUGDqeJk34fvDX79hfCfv5/xd0tS/K/fn+HXP/4bt/yFQSHzd+TFFKDtu1P3TxlTq0rGxoWK5A92mrJp6zyWQKbi+D350Uk5Vc3xRGB6IcDoBtVw2uE8Wv7iLWc7tZ426cX7CuOiaX84UX+pjtlIuTGwNPzRc37qUbOdCKsB2TtSfpvoMJbYONAKkwesh3bd+1wxtLeWvy3mHxaV6oMsC9SJ/CWMhGTcGt4YA8wl52LX4JxX0/GphPkcWf7Ye+pdSOo2aLqgPlX4Nd82EYFqF0ePsHzKhlEyURgiLX/vyngE6pjqyK099TcmuZqE1WFym6mkC33aaeZaENnO8uXsx/viL2rqdhxPVFZSQ84F+8UjlRbiB2cuunWU1hdHGbN4N5vihp3ypzSyeStZdir1aAmGaPVAUR0iTZTuxjGPfwgPTp6AvlWgpolOm1WmoKCn/JVMyic8I5VSGJucCqkRP3BfqwpnISOM7aYlZzXFhLCxtywRcf5N5xy6NNdOfzaDdExiA7oJT04eqE7SVEG6G5fM/TTnm2lYrDVZG4eUDEgGmuBzKxvljj97shV/erjhD7PUIZGPE97tk6BMsiX6VYRbJ/nEplQlJ2IPzBxMmEbOT5Q43p1gzvxFnDr5O5pzP1CdpDkc6iBZZeajwkiY+HWVHvid4Ozf/wM3f49mgoTnGYQ/atVIQAdye6JF/tKeGKcwMoWAUD6QiwjreauTgMwoKebyU8HHpozjMbWfJpsmWKewAEpzmmsTMyu3hb+A2tJTZZUDP832PBj2yJBw0zc9CtHPdjZjNkg7V2Fa/5E2ZUvgsvDXMJHaDf3V47Xg5lFgYjRs1oimevcUFqvC0Wjs7wYDR8LrTGi9aT8v/PW51Q8FD8lRK1Cyyg9mQz0NqwtE6VRPnXOoEsDpVmQ2onSYBvuNoa6HdP2DJp0+SXNSz1bN+rzbe14GxkhKuLkuFPykUUg563JZy9xTOSRxyF3qfjV/HUD0WshOSPdo1SgY50z0jsGhjLWHyPjBxIRPjAnzU+UxY0+wsxCM/RAMuZAMj0x5LLl2KvPJXSYqONO7GGtnBqtRD+IypnNhIesZwysVL+0MpKj/sNo79YfTpoTOBhkkvKhwDFI2ESXSPcYGf9p80ANUlFnnTmfdScqNSd6bDA9UQeGjionp+tLuuOYedQo4ALRg0FACR3pGnLtqf9OotC6sDjGVeyQXeDI7cSq3h8gLVfTPoTmQ0N3cBVyQqy8bdueHNCs5cdRs8Ae6U4u1CJ07A/SEhINVJpgvG+D0hFNo9ipwwHwjkHs0/FF0TkNzZM+QffhGaPO2vTTchViMASToUlC0/hJZRm+VUCSRv2w49ATeWul+9jMoOgdw5CxPGgmtMo9kTh9c8gfCq8eQ0ClJSPmTsp5AqbLBJmh5P9XwvCx5hj99dSH0zMa2JdZONdyXUcoVMCp3+xFoNH5TDZEnPUwtc/79AE3JtJhaOPKi7mgiSJyrfDtHD5mtBezkh8viOA1aOjdpXfKnH4PQDOyTTe/AkDAxG/DwmaOr0moWFPBV/nifRipt8H4wtsGJgZfD+Y3Kh7sfCr6Lvyv4p6hgINiUnX0g/qIJ86ehSlIpN4W6EeEacikuVb2QT5nmbzatl/wBcfowPCAykehJZDzDAZrkEhRQM7WPekd7nT/qzP+R6kmo5uPwW2hqCMddIJJwO1BZMLKZSXO+hLg8uZLXVNXXAi7dy81TDrHT9pZAvnNsTYdJOwzHeKmcX/K3M3QN0nlHwB8FuVBNBUktLLwgoWmHO67xNyvZfhzHHu9htPyhZjM+POyKE+O2U3TZ8RfbmVyv1SGUOC35ckgF3bJJRWxzB+0U2kiM7tYDm7FYEloX/Ckd4cHEgqmG3hF6mqRUqxHhaZvXVf4uO2wcfxCH2xgITg/ZILigcauSUHssuWXUXAczci/swqRiI8MU9dZ34SAhw9GQya+GEhf8wU2D8kmki+A6NLerdiMMfeTSwHUrf6qr89DyB3H4wh+oPVAL1i2tAIZRMg4AfIqXdgGLp/88X5zwL6OdtPy//oQ7/vt/BDjT8T/mEafnuOAP521nrKydMj1HUzqHwwm65zR0+YWb+IuGIzXLUzb4E6f8WaC1IZDLlXfhLyj+/GGFT58+/e8vNnBj/U+fYJfe+WMN6uSXT3bUT6enuOAPjB8mV8GOULMPnYxQ5s6DqIzb5jLUt/A3SOdBfyF/K9w7H5l0JjtKWH6aetIkXfOeLvgbzY4I3T5pv2VKymTOaFUlN4YJteIN/LXG5UYOv1D+uMOmtn8xqMMY4u0RJqezK2kq+JVetQv+QIBJqYFrSZwFHUzEFjsCoxZ9JIrN6p/nD4INEpdTOtuPW/kjx/pgUd+Tv4MwOQPKyuniIPjxV5qtzvnDUAG6K9HiLT6rGtEuiVmMO4zOKGjIz/I3YKsJfPpi/jZSIHeAQg1FZEw2F/WDI3Vl1cc5fy71YKO/lYNZsNMd6ggEsmfij5k/UMBmWcW3yV+qpYWyeHf1VWH62el2/H3OHwShIWcAcPvWjiNmvOOzLCNEDJ/jr5oDltv4izrAif+3ZBjvgDqmLG+fzTHqRxWb65LO+RtR64H/lcEhHWIl3VSYQBieVIf6VVO3Jk7AhInCdKPlDyRNwsaavzmUeZa/lf9MzCqzbIk/hAa5i/6rhl0s+s8laHVUsV3OgFpbvLoxYMR+bjUFcRrUQlKj9iCxr13rMubUFPbg0almOJ/7uZjbWvM3SWeJovI6f0u0pmyWJpGuiBDxzWT6C6DTT3fLq3TSmJAtjttTP0PxpWoCSQ9NF2ohlC5IleiQDhwbk3E6GvkzyYAqsBoLOTjnz+zFusIV/gKQYg6XHlzos3NJhk7eq5wFwfxNiqFhmzeAKbZ8rkukbPmhQdy0+jHpvrZSDTGRFroVfFIZJgYhTASCtH1VHYRnhto1fynm+vbpUNJn/GesSJARrgOD4LsHOO8xVQ3m4e7TL5vTG+W6lnIjWWh0mHyyfgn89M7kIZc7m8+hcQwGBS+G8RyPMauPHXQJWn+GI2zVac1fhNfgTGLK/Cp/Fea5WYyJbowcM2b3hPdr+BzEcwsGV9APyfaXotqhZ+wCDZAB5/Rhq2CsN9rZpzF56ySc87PcXLwRLjgjtgh64f+Z4Uv+ILzgT2va+SzcmPlpzmQS8fLdEB8xoP1Z1B9uwZ+FlOLpOF0QCPZg3Y41N5YL6M2CAzWHxTeEx6UZlvQxB5eJx659pCE4QvsB9suFWJ0oKHC8pN2gdz+l0DyrYZqPe8GYFf9JmrPErlsxmKg9b3mH1WYfvgP8aRi+uwmYCBo27qOr29H83hGMmJyjg+PxgJr6shz3iwaqDmNZ9quG2GRod+Vu38z1/PWJ9MdWf79WQTbp3Zm9kAkGO9h0jYdTvzu5jt7Twp7m3rkDDw+Ph0BkcOXj1uBbT2o208d+A4ptP2NWeVe2kzLbHr2zPsrnsAcnGm0P2MtHXvpVGZ/JPePA1g7VBTb6XzYBNSP058CbvuyLeyBY+XOpNNvM/E/z5/xhbOCPH/gleZY/F8WaZuaX4695J/JnE/aJfGH+QP/JR371hOPPhLS2BviC/AXVHbpBvyE4/kweyTaSv5z9eHhU2PVAbC9OT0mJaciZvyjtunSWoHP+VKePnmq3DIoRxXY/ixbGrrvy07xRIH/70hoQqv/frvhLexEzxsTOVnJP+RtK7dyxWLQLJUOud8WkDC1/4E8SV4uqCYwX4XT/x/p/g6laAWcR5vBooXXXnFBzrcxEmGz0CX+jbd0K6WwhbOMyVoMNf3qHLeokO9uTQdgDLXUwfXRa79mmJtks/GFnJTEv0jHZuTV/pk+Im1YNM4cLs5TQalTkby5m2PHYC7PdyPkmYeQPiBvMGvWqnfkDZ4bu9i32IWPqeMUf9qnJfo8tXGZlO3YjkHDM+QZ/HRyUoxl/h/TwKwHfxbZXEusY2o6wYOYPK0JQSkOqsM694q+3/eGmYRwrbtjSPSZBhC1/Z/zBWwKwLA7jr/XXvD3Yqn1JSI7LtfKFP9gwmfrSNn2u+YP3UWBKPXN1NVNNh2HRhvzhRIcNLAa9dHftq8Hypx9dRBknenPmbwzzPDfvz7/kT7E8D1HqYJGh4S+cYzXsPTjhD97kYbsOjnMz8wPA8nfQmi/VWpAPC39LEq+ll/I3H8XmZOAvchur+GPmT821cqyf31aFfgOw/CF1NQ1xucdp/BFlzXFj/rqj1eTkDyfmNf7MMpAq1YAVc+GjpGQsfxm0XOlpyqIz/tJ9KTCpsMVf1PQk5k7sEvKM/OE7awmLTWH94fhDXyVHvb7mrxqZW9y1wd+Qz/71bfzNeLj5a9+0AVsr/iZBcUXepvxFPXZQUE5u549Y0Ode2/2m4Pgzi+BgKcfCH763Q9J2GLf0HzjCJM6LYdF/n+OvbHuL9tHkz7xpCJ555g9KI4RDd3m/wR/8CRYKfRLJzfOXPE7YNsPxZ94UBmuTF/9vKaJd8ofr99ALVjfzd6Up+E1j7hoOXR+Y4w+WBbvQ/5I/KNSZot2Kv8/4Lw/NH3bXwgM6/jrmlgRu8QcutVlROvMXPOs/L93JY/j8ny14U5j5O3BLl+MPJMwuIZrtx3HmD4IIiiRks9jheqYlfsMuxzn+ndfr4lK5R4vfjAFBkXH8YfrFdCdL579gkzimFHq33igaZ7U378Mlg9jSsPCHC5SA8GrV9Pv2MfMHy7hxrbfjD985wGtVmYZS5A/+IgM5Qj3EvDKrU11O52lrXkDQZBChWRFb+Dtwk9xSoAPYlb+s8fYw85fkNh/l+DNv5uUipkv8ga+aIOwpxU50zYOwCXvkLzLJZYzQLEULfxl62zHBpD97FPW3WrUzEpvodP6LW9lvlvabaWtajKFYPLq3r8jFbVm9SsG2Oq/y96ZfGf8TDyN+2knm3LxzoxDmTyz08PIgjD9aLSvQTVwMepBtT550NIcvB1GlhEiMkw6+YOPZQcKyDFh6al5gsDo9LnxC9vj8Op4HgCo0UBzSwrxbcYA9ho5Gy2Ted2aQrbGpqT3i0ujoUFJSFipoli8E2WHU/O3mnuTl9BpVcYTyyPrVW4+O7XbJaD5681duOejh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh8V7wf6rWHihpfuqXAAAAAElFTkSuQmCC"
                    alt="nat2"
                    class="composition__photo composition__photo--p3"
                  />
                </div>
              </div>
              <div class="col-sm-8 col-md-6 mt-sm-5 h-custom ">
                <TextBlock
                  title="من الصعب جدًا إجراء قطع سل"
                  peragraph=".أبجد هوز حطى كلمن هوى ، إجراءات المراقبة المعززة. التوازن ،
            الاحتياجات الأكبر لرفض المتعة ، من الصعب جدًا إجراء قطع سلس! عبث
            أولئك الذين يرفضون محبة المبارك شيء لا تتبعه الأخوات؟
          "
                />
                <TextBlock
                  title="من الصعب جدًا إجراء قطع سل"
                  peragraph=".أبجد هوز حطى كلمن هوى ، إجراءات المراقبة المعززة. التوازن ،
            الاحتياجات الأكبر لرفض المتعة ، من الصعب جدًا إجراء قطع سلس! عبث
            أولئك الذين يرفضون محبة المبارك شيء لا تتبعه الأخوات؟
          "
                />

                <a href="#" class="btn-text">&larr; محبة </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="main__cards">
        <vs-card-group>
          <Card
            title="الاحتياجات الأكبر لرفض المتعة"
            img="/levo.jpg"
            peragraph="أبجد هوز حطى كلمن هوى ، إجراءات المراقبة المعززة. التوازن ،
                الاحتياجات الأكبر لرفض المتعة .أبجد هوز حطى كلمن هوى ، إجراءات
                المراقبة المعززة. التوازن ، الاحتياجات الأكبر لرفض المتعة .أبجد
                هوز حطى كلمن هوى ، إجراءات المراقبة المعززة. التوازن ،
                الاحتياجات الأكبر لرفض المتعة"
            v-for="(card, i) in 6"
            :key="i"
          />
        </vs-card-group>
      </section>
    </main>
    <section class="before-footer">
      <div class="row">
        <div class="col-6 text-center">
          <img
            src="Enthusiastic-bro.svg"
            alt="triangle with all three sides equal"
            height="400"
          />
        </div>
        <div class="col-5 text-center mt-5">
          <TextBlock
            title="من الصعب جدًا إجراء قطع سل"
            peragraph=".أبجد هوز حطى كلمن هوى ، إجراءات المراقبة المعززة. التوازن ،
            الاحتياجات الأكبر لرفض المتعة ، من الصعب جدًا إجراء قطع سلس! عبث
            أولئك الذين يرفضون محبة المبارك شيء لا تتبعه الأخوات؟
          "
          />
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="row">
        <div class="col-12">
          <div class="copyright heading-third text-center">
            &copy; 2020 - france pour les kurds - All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Card from "~/components/Cards";
import TextBlock from "~/components/TextBlock";
export default {
  components: {
    Card,
    TextBlock
  }
};
</script>

<style lang="scss">
//heading spcial stayle
.main__cards {
  background-image: linear-gradient(
      to right bottom,
      rgba($color-primery-light, 0.8),
      rgba($color-primery-dark, 0.3)
    ),
    url("https://cdn.pixabay.com/photo/2019/10/14/15/27/alpine-4549189_1280.jpg");
  background-size: cover;
  background-position: top;
  height: 95vh;
  clip-path: polygon(0 0, 100% 10%, 100% 91%, 0 100%);
  z-index: 10;
  margin-top: -13rem;
  padding: 15rem 0;
}
.head {
  color: white;
  position: relative;
  background-image: linear-gradient(
      to right bottom,
      rgba($color-primery-light, 0.8),
      rgba($color-primery-dark, 0.3)
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
    @media screen and (max-width: 768px) {
      height: 50px;
    }
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
  padding: 15rem 0;
  & .row {
    margin-top: 10rem;
  }
}

.heading-secondary {
  font-size: 3.5rem;
  text-transform: uppercase;
  font-weight: 700;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: 0.1rem;

  background-image: linear-gradient(
    to right,
    $color-primery,
    $color-primery-light
  );
}
.composition {
  position: relative;

  &__photo {
    width: 45%;
    box-shadow: 0 1.5rem 40rem rgba($color-black, 0.4);
    border-radius: 2px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    -ms-border-radius: 2px;
    -o-border-radius: 2px;
    position: absolute;
    z-index: 10;
    transition: all 0.2s ease-out;
    outline-offset: 2rem;

    &--p1 {
      left: 0;
      top: -1rem;
    }

    &--p2 {
      right: 7rem;
      top: 2rem;
    }
    &--p3 {
      left: 5rem;
      top: 10rem;
    }

    &:hover {
      outline: 1.5rem solid $color-primery;
      box-shadow: 0 2.5rem 40rem rgba($color-black, 0.4);
      z-index: 11;
      transform: scale(1.05) translateY(-0.5rem);
      -webkit-transform: scale(1.15) translateY(-0.5rem);
      -moz-transform: scale(1.15) translateY(-0.5rem);
      -ms-transform: scale(1.15) translateY(-0.5rem);
      -o-transform: scale(1.15) translateY(-0.5rem);
    }
  }

  &:hover &__photo:not(:hover) {
    transform: scale(0.91);
    -webkit-transform: scale(0.91);
    -moz-transform: scale(0.91);
    -ms-transform: scale(0.91);
    -o-transform: scale(0.91);
  }
}

.heading-third {
  font-size: 2rem !important;
  font-weight: 700;
  text-align: right;
  text-transform: uppercase;
}

.peragraph {
  font-size: 1.8rem !important;
  text-align: right;
  &:not(:last-child) {
    margin-bottom: 3rem;
  }
}
.btn-text {
  &:link,
  &:visited {
    text-align: right;
    font-size: 1.6rem;
    color: $color-primery;
    display: inline-block;
    text-decoration: none;
    border-bottom: 0.1rem solid $color-primery;
    padding: 5px;
    transition: all 0.2s ease-out;
    -webkit-transition: all 0.2s ease-out;
    -moz-transition: all 0.2s ease-out;
    -ms-transition: all 0.2s ease-out;
    -o-transition: all 0.2s ease-out;
  }

  &:hover {
    background-color: $color-primery;
    color: $color-white;
    box-shadow: rgba($color-black, 0.2) 0 1rem 2rem;
    transform: translateY(-0.2rem);
    -webkit-transform: translateY(-0.2rem);
    -moz-transform: translateY(-0.2rem);
    -ms-transform: translateY(-0.2rem);
    -o-transform: translateY(-0.2rem);
  }

  &:active {
    box-shadow: rgba($color-black, 0.2) 0 0.5rem 1rem;
    transform: translateY(-0.1rem);
    -webkit-transform: translateY(-0.1rem);
    -moz-transform: translateY(-0.1rem);
    -ms-transform: translateY(-0.1rem);
    -o-transform: translateY(-0.1rem);
  }
}
.h-custom {
  height: 35rem;
}
.vs-card__group-cards::-webkit-scrollbar {
  display: none;
}
.vs-card-content {
  margin-left: 10rem !important;
}
.before-footer {
  background-color: #f4f4f4;
  height: 70vh;
  margin-top: -10rem;
  padding: 20rem;
}

.footer {
  background-color: #222;
  height: 4vh;
}
</style>
