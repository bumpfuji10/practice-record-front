<template>
<div class="setting-toggle" v-if="is_show_toggle">
  <ul class="toggle-ul">
    <li class="toggle-list">
      <img src="/src/assets/user.svg" alt="" class="toggle-list-icon">
      マイページ
    </li>
    <li class="toggle-list">
      <img src="/src/assets/heart.svg" alt="" class="toggle-list-icon">
      いいねした日誌
    </li>
    <li class="toggle-list">
      <img src="/src/assets/pen.svg" alt="" class="toggle-list-icon">
      日誌を書く
    </li>
    <br>
    <li class="toggle-list" @click="submitLogout">
      <img src="/src/assets/logout.svg" alt="" class="toggle-list-icon">
      ログアウト
    </li>
  </ul>
</div>
</template>

<script>
import { logoutUser } from '../../resources/user_logout'

export default {
  props: ["is_show_toggle"],
  methods: {
    submitLogout() {
      try {
        const response = logoutUser()
        console.log(response)
      } catch(e) {
        console.error(e)
      }
    },
  }
}
</script>
