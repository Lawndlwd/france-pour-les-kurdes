<template>
  <div>
    <Alert
      :countDownChanged="countDownChanged"
      :dismissCountDown="alert.dismissCountDown"
      :variant="alert.variant"
      :msg="alert.msg"
    />
    <section class="section-book">
      <div class="container">
        <div class="row justify-content-center">
          <div class="book col-10 col-md-9">
            <div class="book__form row justify-content-around">
              <Form
                heading="التسجيل"
                btn="التسجيل"
                :submitFn="onSignUp"
                :disabled="$v.signUp.$invalid"
                v-if="signup"
              >
                <Input
                  type="text"
                  v-model="$v.signUp.name.$model"
                  label="الاسم الكامل"
                  id="name"
                  autocomplete
                  required
                  :class="{ 'form__input--error': $v.signUp.name.$error }"
                />
                <div
                  class="form__input--msg"
                  v-if="!$v.signUp.name.required && $v.signUp.name.$error"
                >
                  Field is required
                </div>
                <div
                  class="form__input--msg"
                  v-if="!$v.signUp.name.minLength && $v.signUp.name.$error"
                >
                  Field is required
                </div>
                <Input
                  type="email"
                  v-model="$v.signUp.email.$model"
                  label="البريد الالكتروني"
                  id="email"
                  autocomplete
                  required
                  :class="{ 'form__input--error': $v.signUp.email.$error }"
                />
                <div
                  class="form__input--msg"
                  v-if="!$v.signUp.email.required && $v.signUp.email.$error"
                >
                  Field is required
                </div>
                <div
                  class="form__input--msg"
                  v-if="!$v.signUp.email.email && $v.signUp.email.$error"
                >
                  invalid email
                </div>
                <Input
                  type="password"
                  v-model="$v.signUp.password.$model"
                  label="كلمة المرور"
                  id="password"
                  autocomplete
                  required
                  :class="{ 'form__input--error': $v.signUp.password.$error }"
                />
                <div
                  class="form__input--msg"
                  v-if="
                    !$v.signUp.password.required && $v.signUp.password.$error
                  "
                >
                  Field is required
                </div>
                <div
                  class="form__input--msg"
                  v-if="
                    !$v.signUp.password.minLength && $v.signUp.password.$error
                  "
                >
                  have to be 8 charecter at least
                </div>
                <div
                  class="form__input--msg"
                  v-if="!$v.signUp.password.number && $v.signUp.password.$error"
                >
                  have to contain one number minimum
                </div>
                <div
                  class="form__input--msg"
                  v-if="
                    !$v.signUp.password.uppercase && $v.signUp.password.$error
                  "
                >
                  have to contain one uppercase letter minimum
                </div>
                <Input
                  type="password"
                  v-model="$v.signUp.repeatPassword.$model"
                  label="كلمة المرور"
                  id="repeatPassword"
                  autocomplete
                  required
                  :class="{
                    'form__input--error': $v.signUp.repeatPassword.$error
                  }"
                />
                <div
                  class="form__input--msg"
                  v-if="
                    !$v.signUp.repeatPassword.required &&
                      $v.signUp.repeatPassword.$error
                  "
                ></div>
                <div
                  class="form__input--msg"
                  v-if="
                    !$v.signUp.repeatPassword.sameAsPassword &&
                      $v.signUp.repeatPassword.$error
                  "
                >
                  Field is sameAsPassword
                </div>
                <div>
                  have account ?
                  <span class="btn-text" @click="signup = !signup">login</span>
                </div>
              </Form>
              <Form
                heading="تسجيل الدخول"
                btn="تسجيل الدخول"
                :submitFn="onLogin"
                :disabled="$v.signIn.$invalid"
                v-else
              >
                <Input
                  type="email"
                  v-model.trim="$v.signIn.email.$model"
                  label="البريد الالكتروني"
                  id="email"
                  required
                  autocomplete
                  :class="{ 'form__input--error': $v.signIn.email.$error }"
                />
                <div
                  class="form__input--msg"
                  v-if="!$v.signIn.email.required && $v.signIn.email.$error"
                >
                  Field is required
                </div>
                <div
                  class="form__input--msg"
                  v-if="!$v.signIn.email.email && $v.signIn.email.$error"
                >
                  invalid email
                </div>
                <Input
                  type="password"
                  v-model.trim="$v.signIn.password.$model"
                  label="كلمة المرور"
                  id="password"
                  required
                  autocomplete
                  :class="{ 'form__input--error': $v.signIn.password.$error }"
                />
                <div
                  class="form__input--msg"
                  v-if="
                    !$v.signIn.password.required && $v.signIn.password.$error
                  "
                >
                  Field is required
                </div>
                <div
                  class="form__input--msg"
                  v-if="
                    !$v.signIn.password.minLength && $v.signIn.password.$error
                  "
                >
                  have to be 8 charecter at least
                </div>
                <div
                  class="form__input--msg"
                  v-if="!$v.signIn.password.number && $v.signIn.password.$error"
                >
                  have to contain one number minimum
                </div>
                <div
                  class="form__input--msg"
                  v-if="
                    !$v.signIn.password.uppercase && $v.signIn.password.$error
                  "
                >
                  have to contain one uppercase letter minimum
                </div>
                <div>
                  dont have account ?
                  <span class="btn-text" @click="signup = !signup"
                    >register</span
                  >
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
import { uppercase, number } from "@/utils/passwordComlixty";
import Input from "@/components/Input";
import Alert from "@/components/Alert";
import Form from "@/components/Form";
export default {
  components: { Form, Input },
  data() {
    return {
      alert: {
        dismissSecs: 5,
        dismissCountDown: 0,
        msg: "",
        variant: "success"
      },
      signup: true,
      signIn: {
        email: "",
        password: ""
      },
      signUp: {
        email: "",
        password: "",
        name: "",
        repeatPassword: ""
      }
    };
  },
  computed: {
    v() {
      return this.$v;
    }
  },
  validations: {
    signIn: {
      email: {
        email,
        required
      },
      password: {
        required,
        minLength: minLength(8),
        uppercase,
        number
      }
    },
    signUp: {
      name: {
        required,
        minLength: minLength(2)
      },
      email: {
        email,
        required
      },
      password: {
        required,
        minLength: minLength(8),
        uppercase,
        number
      },
      repeatPassword: {
        required,
        sameAsPassword: sameAs("password")
      }
    }
  },
  methods: {
    async onSignUp() {
      let data = {
        email: this.$v.signUp.$model.email,
        password: this.$v.signUp.$model.password,
        name: this.$v.signUp.$model.name
      };
      try {
        const result = await this.$axios.$post("/api/auth/signup", data);
        if (result.user) {
          let data2 = {
            data: {
              email: this.$v.signUp.$model.email,
              password: this.$v.signUp.$model.password
            }
          };
          this.onLogin(null,data2);
        }
      } catch (error) {
        this.showAlert(error.response.data.message, "danger");
      }
    },
    async onLogin(_,data = null) {
      try {
        if (data === null) {
          data = {
            data: {
              email: this.$v.signIn.email.$model,
              password: this.$v.signIn.password.$model
            }
          };
        }
        const auth2 = await this.$auth.loginWith("local", data);
        this.$store.dispatch("setUser", this.$auth.user);
        this.$router.push("/");
      } catch (error) {
        this.showAlert(error.response.data.message, "danger");
      }
    },
    showAlert(msg, variant) {
      this.alert.dismissCountDown = this.alert.dismissSecs;
      this.alert.msg = msg;
      this.alert.variant = variant;
    },
    countDownChanged(dismissCountDown) {
      this.alert.dismissCountDown = dismissCountDown;
    }
  }
};
</script>

<style lang="scss"></style>
