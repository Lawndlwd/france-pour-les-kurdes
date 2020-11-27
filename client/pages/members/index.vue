<template>
  <div>
    <section class="section-book">
      <div class="container">
        <div class="row justify-content-center my-5">
          <div class=" col-xs-8 col-sm-8 col-md-4 col-lg-4 mb-5 ">
            <b-form-input
              id="input-live"
              aria-describedby="input-live-help input-live-feedback"
              placeholder="Enter your name"
              trim
            ></b-form-input>
          </div>
        </div>
        <div class="row justify-content-center">
          <Card
            title="الاحتياجات الأكبر لرفض المتعة"
            img="/levo.jpg"
            peragraph="أبجد هوز حطى كلمن هوى ، إجراءات المرتعة .أبجد هوز حطى كلم"
            v-for="member in members"
            :member="member"
            :key="member._id"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Card from "~/components/Cards";
export default {
  components: {
    Card
  },
  computed: {
    members(){
      return this.$store.getters.profiles
    }
  }
};
</script>

<style></style>
