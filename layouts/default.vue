<template>
  <div>
    <Header />

    <div v-show="!getMenuOpenStatus">
      <nuxt />
    </div>
    <btn-scroll v-if="!getMenuOpenStatus" />
    <div class="is-mobile d-block d-sm-none"></div>
  </div>
</template>

<script>
import BtnScroll from '~/components/public/BtnScroll'
import Header from '~/components/public/Header'

export default {
  components: { Header, BtnScroll },
  computed: {
    getMenuOpenStatus() {
      return this.$store.state.header.isMenuOpen
    }
  },
  watch: {
    getMenuOpenStatus: function(newValue, oldValue) {}
  }
}
</script>
