<template>
  <div>
    <Header />
    <div v-show="!getMenuOpenStatus">
      <nuxt />
    </div>
    <div class="is-mobile d-block d-sm-none"></div>
  </div>
</template>

<script>
import Header from '~/components/public/Header'

export default {
  components: { Header },
  computed: {
    getMenuOpenStatus() {
      return this.$store.state.header.isMenuOpen
    }
  },
  watch: {
    getMenuOpenStatus(newValue, oldValue) {}
  }
}
</script>
