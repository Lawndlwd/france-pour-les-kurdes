<template>
  <div>
    <section class="section-book">
      <div class="container">
        <div class="row justify-content-center">
          <div class="book col-10 col-md-9">
            <div class="book__form row justify-content-around">
              <Form
              heading="التسجيل"
              btn="التسجيل"
              :submitFn="onSubmit"
              >
                <Input
                  type="text"
                  v-model="form.name"
                  label="الاسم الكامل"
                  id="name"
                  autocomplete
                />
                <Input
                  type="email"
                  v-model="form.email"
                  label="البريد الالكتروني"
                  id="email"
                  autocomplete
                />
                <Input
                  type="password"
                  v-model="form.password"
                  label="كلمة المرور"
                  id="password"
                  autocomplete
                />
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
  data() {
    return {
      form: {
        email: "",
        name: "",
        password: ""
      }
    };
  },
  methods: {
    async onSubmit() {
      console.log(this.form);
      try {
        const result = await this.$axios.$post("/api/auth/signup", this.form);
        if (result.user) {
          const auth2 = await this.$auth.loginWith("local", {
            data: {
              email: this.form.email,
              password: this.form.password
            }
          });
          this.$auth;
          console.log(auth2);
          this.$router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss"></style>
