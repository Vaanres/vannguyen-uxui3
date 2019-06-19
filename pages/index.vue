<template>
  <div>
    <home-works />
    <home-inform />
  </div>
</template>

<script>
import HomeWorks from '~/components/pages/home/HomeWorks'
import HomeInform from '~/components/pages/home/HomeInform'
export default {
  components: { HomeWorks, HomeInform }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/core';
</style>
