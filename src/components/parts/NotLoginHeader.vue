<template>
  <div>
    <header>
      <div class="header-container">
        <nav class="gyraph-logo">
          <router-link to="/">Gyraph</router-link>
        </nav>
        <div class="loginAndNewAccount">
          <button class="login">
            <router-link to="/login">ログイン</router-link>
          </button>
          <button class="new-account">
            <router-link to="/signup">新規登録</router-link>
          </button>
        </div>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
export default {
  name: 'NotLoginHeader'
}
</script>
