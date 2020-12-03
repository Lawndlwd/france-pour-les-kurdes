<template>
  <div>
    <section class="section-book">
      <div class="container">
        <div class="row justify-content-center">
          <div class="book col-11 col-md-11">
            <div class="book__form row justify-content-center m-0">
              <div class="col-11 col-md-11 text-center mb-5">
                <b-avatar
                  class="avatar"
                  button
                  id="toggle-btn"
                  @click="toggleModal"
                  :src="avatar"
                  size="10rem"
                >
                </b-avatar>
                <div>
                  <b-modal ref="upload" hide-footer>
                    <div class="d-block text-center">
                      <h3>حمل صورتك</h3>
                    </div>
                    <b-form-file
                      ref="file"
                      accept=".jpg, .png, .jpeg"
                      :class="{ 'form__input--error': avatarMsg }"
                    ></b-form-file>
                    <div class="form__input--msg" v-if="avatarMsg">
                      {{ avatarMsg }}
                    </div>
                    <div class="form__group mt-5">
                      <button class="btn btn-success" @click="uploadPhoto">
                        &larr; تحميل
                      </button>
                    </div>
                  </b-modal>
                </div>
              </div>
              <no-ssr>
              <Form
                heading="بروفايلي"
                btn="تحديث"
                :submitFn="onSubmit"
                :disabled="$v.form.$invalid"
              >
                <Input
                  type="text"
                  v-model="form.name"
                  label="الاسم الكامل"
                  id="name"
                  autocomplete
                  required
                  :class="{ 'form__input--error': $v.form.name.$invalid }"
                />
                <div class="form__input--msg" v-if="!$v.form.name.required">
                  Field is required
                </div>
                <div class="form__input--msg" v-if="!$v.form.name.minLength">
                  Name must have at least
                  {{ $v.form.name.$params.minLength.min }} letters.
                </div>

                <Input
                  type="email"
                  v-model="form.email"
                  label="البريد الالكتروني"
                  id="email"
                  autocomplete
                  required
                  :class="{ 'form__input--error': $v.form.email.$error }"
                />
                <div class="form__input--msg" v-if="!$v.form.email.required">
                  Field is required
                </div>
                <div class="form__input--msg" v-if="!$v.form.email.email">
                  invalid email
                </div>
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
                  v-model="form.facebookLink"
                  label="رابط حساب الفيس بوك"
                  id="faceLink"
                  autocomplete
                  :class="{
                    'form__input--error': $v.form.facebookLink.$invalid
                  }"
                />
                <div class="form__input--msg" v-if="!$v.form.facebookLink.url">
                  invalid url
                </div>
                <text-area
                  type="text"
                  v-model="form.description"
                  label="الوصف"
                  id="desc"
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
              </no-ssr>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {
  required,
  minLength,
  email,
  url,
  maxValue
} from "vuelidate/lib/validators";

import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import Form from "@/components/Form";
export default {
  components: { Form, Input, TextArea },
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
    } = this.$store.getters.user;
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
        originCity,
      },
      file: {},
      avatarMsg: null
    };
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(2)
      },
      email: {
        email,
        required
      },
      facebookLink: {
        url
      }
    },
    avatar: {
      maxValue: maxValue(2000000)
    }
  },
  computed: {
    avatar() {
        return this.$store.getters.user.avatar;
    }
  },
  methods: {
    validatePhoto() {
      return (
        (this.file.type == "image/jpg" &&
          this.file.type == "image/png" &&
          this.file.type == "image/jpeg") ||
        this.file.size <= 2000000
      );
    },
    async onSubmit() {
      try {
        console.log(this.form)
        this.$store.dispatch("changeUser", this.form);
      } catch (error) {
        console.log(error);
      }
    },
    toggleModal() {
      this.$refs["upload"].toggle("#toggle-btn");
    },
    async uploadPhoto() {
      this.file = this.$refs.file.files[0];
      console.log(this.file)
      if (this.validatePhoto()) {
        this.avatarMsg = null;
        let formData = new FormData();
        formData.append("avatar", this.file);
        try {
          this.$store.dispatch("changeUser", formData);
          this.toggleModal();
        } catch (error) {
          console.log(error.response);
        }
      } else {
        this.avatarMsg =
          "Photo have to be less than 2 mb and with jpg , png or jpeg extentions";
      }
    }
  },
  created() {
    if(this.$auth.loggedIn && this.$store.getters.user !== {}){
      console.log('object')
      this.$store.dispatch("setUser",this.$auth.user)
    }
  }
};
</script>

<style>
.form-group--error {
  border: red;
}
</style>
