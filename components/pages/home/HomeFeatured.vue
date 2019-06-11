<template>
  <section>
    <div class="container">
      <div class="row no-gutters mt-5">
        <div class="col-12">
          <h2>{{ title }}</h2>
          <p class="text-secondary">{{ subTitle }}</p>
          <div class="works">
            <div class="work-item"></div>
            <div class="work-item"></div>
            <div class="work-item"></div>
            <div class="work-item"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeFeatured',
  data() {
    return {
      title: 'Featured Work',
      subTitle: 'Explore some of our latest website projects.'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/core';

@supports (display: grid) {
  .works {
    --work-col: 1;
    display: grid;
    grid-gap: 6rem;
    //grid-template-columns: auto auto;
    grid-template-columns: repeat(var(--work-col), 1fr);
    margin: 6rem 0;
    @include media-breakpoint-up(md) {
      --work-col: 2;
    }
  }
}

.works {
  .work-item {
    height: 300px;
    background: $gray-100;
  }
}
</style>
