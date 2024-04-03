<template>
<div class="base-background">
  <div class="signup-header-container">
    <h1 class="base-center-logo">
      <router-link to="/">Gyraph</router-link>
    </h1>
  </div>
  <div v-if="errorMessage">
    {{ errorMessage }}
  </div>
  <div class="base-center-text">
    新規登録
  </div>
  <main class="base-main-zone">
    <Form @submit.prevent="submitForm">
      <div class="signup-grid">
        <div class="input-name-and-validate">
          <label for="" class="signup-label">
            名前
          </label>
        </div>
        <Field v-model="newUser.name" name="name" type="text" class="signup-form-input" rules="required" placeholder="名前を入力" />
        <ErrorMessage name="name" class="input-error-message"/>
      </div>
      <div class="signup-grid">
        <div class="input-name-and-validate">
          <label for="" class="signup-label">
            メールアドレス
          </label>
        </div>
        <Field v-model="newUser.email" name="email" type="email" class="signup-form-input" rules="required|email" placeholder="メールアドレスを入力" />
        <ErrorMessage name="email" class="input-error-message" />
      </div>
      <div class="signup-grid">
        <div class="input-name-and-validate">
          <label for="" class="signup-label">
            パスワード
          </label>
        </div>
        <Field v-model="newUser.password" name="password" type="password" class="signup-form-input" rules="required" placeholder="パスワードを入力" />
        <ErrorMessage name="password" class="input-error-message" />
      </div>
      <button @click="submitForm" :class="isFormValid ? 'signup-button' : 'not-input-button'" :disabled="!isFormValid">
        <div v-if="isLoading" class="loading"></div>
        <span v-if="!isLoading">登録</span>
      </button>
    </Form>
    <div class="redirect-signup">
      <router-link to="/login">ログインはこちら</router-link>
    </div>
  </main>
</div>
</template>

<script>
import { ErrorMessage, Field, Form } from 'vee-validate';
import { createUser } from '../../resources/user'
import './../../customValidations';

  export default {
    name: 'Signup',
    components: {
      ErrorMessage,
      Field,
      Form
    },
    data() {
      return {
        newUser: {
          name: "",
          email: "",
          password: ""
        },
        errorMessage: "",
        isLoading: false,
      }
    },
    methods: {
      async submitForm() {
        try {
          this.isLoading = true;
          const response = await createUser(this.newUser);
          this.$nextTick(() => {
            this.$router.push('/');
          });
        } catch(error) {
          if (error.response && error.response.status === 422) {
            this.errorMessage = error.response.data.fullMessages;
          }
        } finally {
          this.isLoading = false;
        };
      },
      isValidEmail(address) {
        const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i;
        return emailRegex.test(address);
      }
    },
    computed: {
      isFormValid() {
        return this.newUser.name && this.newUser.email && this.isValidEmail(this.newUser.email) && this.newUser.password
      }
    }
  };
</script>
