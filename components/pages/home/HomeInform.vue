<template>
  <section class="inform-container d-flex align-items-center bg-primary p-5">
    <div class="container">
      <div class="row no-gutters">
        <div class="col-12 col-lg-8 offset-lg-2">
          <h5 class="text-white mb-0">{{ text }}</h5>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeInform',

  data() {
    return {
      text:
        'We are a web design and development company, building websites that drive traffic, engagement, and conversion for industry-leading brands and startups in Vietnam.'
    }
  },

  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.inform-container {
  h5 {
    line-height: 1.8;
  }

  height: 100vh;
}
</style>
