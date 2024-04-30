<template>
<div class="setting-dropdown" v-if="is_show_dropdown">
  <ul class="dropdown-ul">
    <li class="dropdown-list">
      <img src="/src/assets/user.svg" alt="" class="dropdown-list-icon">
      マイページ
    </li>
    <li class="dropdown-list">
      <img src="/src/assets/heart.svg" alt="" class="dropdown-list-icon">
      いいねした日誌
    </li>
    <li class="dropdown-list">
      <img src="/src/assets/pen.svg" alt="" class="dropdown-list-icon">
      日誌を書く
    </li>
    <br>
    <li class="dropdown-list" @click="submitLogout">
      <img src="/src/assets/logout.svg" alt="" class="dropdown-list-icon">
      ログアウト
    </li>
  </ul>
</div>
</template>

<script>
import { logoutUser } from '../../resources/user_logout'

export default {
  props: ["is_show_dropdown"],
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
