<template>
  <div>
    <header
      class="head"
      :style="`background-image: url('${home.header_img}');`"
    >
      <div class="liner">
        <div class="head__contain--text col-12">
          <h1 class="header-primery">
            <span class="header-primery--main d-block"
              >{{ home.header_main_text }}
            </span>
            <span class="header-primery--sub d-block">{{
              home.header_sub_text
            }}</span>
          </h1>
        </div>
      </div>
    </header>

    <main class="main">
      <section class="main__info">
        <div class="container">
          <div class="text-center mb-5">
            <h1 class="heading-secondary">
              إجراءات المراقبة المعززة
            </h1>
          </div>
          <div class="container-fluid">
            <div class="row justify-content-center">
              <div class="col-sm-8 col-md-6 mt-sm-5 h-custom-25 ">
                <TextBlock
                  :title="home.main_text_1"
                  :peragraph="home.sub_text_1"
                />
                <TextBlock
                  :title="home.main_text_2"
                  :peragraph="home.sub_text_2"
                />

                <a href="#" class="btn-text">&larr; محبة </a>
              </div>
              <div class="col-sm-8 col-md-6 mb-sm-5 h-custom-15">
                <div class="composition">
                  <img
                    v-for="(img, i) in home.main_info_imgs"
                    :key="i"
                    :src="img"
                    :alt="img"
                    :class="`composition__photo composition__photo--p${i + 1}`"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="main__cards">
        <div class="container">
          <div class="row justify-content-center"></div>
        </div>
      </section>
    </main>
    <!-- <section class="before-footer">
      <div class="row">
        <div class="col-6 text-center">
          <img
            src="kfs.svg"
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
    </section> -->
  </div>
</template>

<script>
import Card from "~/components/Cards";
import TextBlock from "~/components/TextBlock";
export default {
  components: {
    Card,
    TextBlock
  },
  computed: {
    home() {
      return this.$store.getters.home;
    }
  },
  created() {
    if(this.$auth.loggedIn && this.$store.getters.user !== {}){
      this.$store.dispatch("setUser",this.$auth.user)
    }
  }
};
</script>
