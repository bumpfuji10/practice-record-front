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
            <img src="/src/assets/user.svg" alt="" class="userIcon" @click="openSettingsToggle($event)">
            <header-toggle ref="toggle" :is_show_toggle="is_show_toggle"/>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import HeaderToggle from './HeaderToggle.vue'

export default {
  components: {
    HeaderToggle
  },
  data() {
    return {
      is_show_toggle: false
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside)
  },
  methods: {
    openSettingsToggle(event) {
      event.stopPropagation()
      this.is_show_toggle = !this.is_show_toggle;
    },
    closeToggle() {
      this.is_show_toggle = false
    },
    handleClickOutside(event) {
      // トグルコンポーネントのDOMを取得
      const toggleElement = this.$refs.toggle? this.$refs.toggle.$el : null

      // イベントがトグル内で発生した場合、何もしない
      if (toggleElement && toggleElement.contains(event.target)) {
        return;
      }
      this.is_show_toggle = false;
    }
  }
}
</script>
