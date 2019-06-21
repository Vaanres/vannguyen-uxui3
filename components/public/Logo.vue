<template>
  <span class="main-logo mb-0" :class="{ 'text-light': isLightLogo }">
    {{ text }}
  </span>
</template>

<script>
import charming from 'charming'
export default {
  name: 'Logo',
  props: {
    isLightLogo: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      text: 'VanNguyen'
    }
  },
  mounted() {
    this.trim('.main-logo')
    charming(document.querySelector('.main-logo'), {
      classPrefix: 'moving-letters'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/core';

.main-logo {
  font-size: 2rem;
  line-height: 1;
  font-weight: 700;
}
</style>
