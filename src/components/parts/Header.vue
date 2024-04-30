<template>
  <div>
    <header>
      <div class="header-container">
        <nav class="gyraph-logo">
          <router-link to="/">Gyraph</router-link>
        </nav>
        <div class="rightNavs">
          <button class="base-header-button">日誌を書く</button>
          <div style="position: relative;">
            <div class="userIcon" style="">
              <img src="/src/assets/user.svg" alt="" @click="openSettingsDropdown($event)">
            </div>
            <dropdown-menu ref="dropdown" :is_show_dropdown="is_show_dropdown"/>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import DropdownMenu from './DropdownMenu.vue'

export default {
  components: {
    DropdownMenu
  },
  data() {
    return {
      is_show_dropdown: false
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside)
  },
  methods: {
    openSettingsDropdown(event) {
      event.stopPropagation()
      this.is_show_dropdown = !this.is_show_dropdown;
    },
    closeDropdown() {
      this.is_show_dropdown = false
    },
    handleClickOutside(event) {
      // トグルコンポーネントのDOMを取得
      const dropdownElement = this.$refs.dropdown? this.$refs.dropdown.$el : null

      // イベントがトグル内で発生した場合、何もしない
      if (dropdownElement && dropdownElement.contains(event.target)) {
        return;
      }
      this.is_show_dropdown = false;
    }
  }
}
</script>
