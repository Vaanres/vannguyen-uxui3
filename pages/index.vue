<template>
  <div>
    <home-hero />
    <home-inform />
    <home-works />
  </div>
</template>

<script>
import HomeHero from '~/components/pages/home/HomeHero'
import HomeWorks from '~/components/pages/home/HomeWorks'
import HomeInform from '~/components/pages/home/HomeInform'

export default {
  components: { HomeHero, HomeWorks, HomeInform }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/core';
</style>
