<template>
<div class="base-background">
  <div class="signup-header-container">
    <h1 class="base-center-logo">
      <router-link to="/">Gyraph</router-link>
    </h1>
  </div>
  <div class="base-center-text">
    新規登録
  </div>
  <main class="base-main-zone">
      <div class="signup-grid">
        <div class="input-name-and-validate">
          <label for="" class="signup-label">
            名前
          </label>
        </div>

      </div>
      <div class="signup-grid">
        <div class="input-name-and-validate">
          <label for="" class="signup-label">
            メールアドレス
          </label>
        </div>
      </div>
      <div class="signup-grid">
        <div class="input-name-and-validate">
          <label for="" class="signup-label">
            パスワード
          </label>
        </div>
      </div>
    <div class="redirect-signup">
    </div>
  </main>
</div>
</template>

<script>
  export default {
    name: 'Signup',
    data() {
      return {
        test: ""
      }
    },
    mounted() {
      console.log("hoge")
    }
  };
</script>
