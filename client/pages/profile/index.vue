<template>
  <div>
    <section class="section-book">
      <div class="container">
        <div class="row justify-content-center">
          <div class="book col-11 col-md-11">
            <div class="book__form row justify-content-center m-0">
              <Form heading="بروفايلي" btn="تحديث" :submitFn="onSubmit">
                <Input
                  type="text"
                  v-model="form.name"
                  label="الاسم الكامل"
                  id="name"
                  autocomplete
                  required
                />
                <Input
                  type="email"
                  v-model="form.email"
                  label="البريد الالكتروني"
                  id="email"
                  autocomplete
                  required
                />
                <Input
                  type="text"
                  v-model="form.work"
                  label="العمل"
                  id="work"
                  autocomplete
                />
                <Input
                  type="text"
                  v-model="form.city"
                  label="المدينة الحالية"
                  id="city"
                  autocomplete
                />
                <Input
                  type="text"
                  v-model="form.originCity"
                  label="المدينة الاصلية"
                  id="originCity"
                  autocomplete
                />
                <Input
                  type="text"
                  v-model="form.description"
                  label="الوصف"
                  id="desc"
                  autocomplete
                />
                <Input
                  type="text"
                  v-model="form.facebookLink"
                  label="رابط حساب الفيس بوك"
                  id="faceLink"
                  autocomplete
                />

                <b-form-group label="حساب خاص او عام " class="text-center">
                  <b-form-checkbox
                    switch
                    size="lg"
                    switch-variant="black"
                    v-model="form.isPublished"
                    >{{ form.isPublished ? "عام" : "خاص" }}</b-form-checkbox
                  >
                </b-form-group>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Input from "@/components/Input";
import Form from "@/components/Form";
export default {
  components: { Form, Input },
  middleware: "auth",
  data() {
    const {
      email,
      name,
      isAdmin,
      isPublished,
      work,
      city,
      facebookLink,
      description,
      originCity
    } = this.$auth.user;
    console.log(isPublished);
    return {
      form: {
        email,
        name,
        isAdmin,
        isPublished,
        work,
        city,
        facebookLink,
        description,
        originCity
      }
    };
  },
  methods: {
    async onSubmit() {
      console.log(this.form);
      try {
        const result = await this.$axios.$put(`/api/auth/profile`, this.form);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style></style>
