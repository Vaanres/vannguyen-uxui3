<template>
  <section>
    <div class="container">
      <div class="row no-gutters mt-5">
        <div class="col-12">
          <h2>{{ title }}</h2>
          <p class="text-secondary">{{ subTitle }}</p>
          <div class="works">
            <home-work-item
              v-for="(item, index) in works"
              :id="index"
              :key="index"
              :item="item"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HomeWorkItem from '~/components/pages/home/HomeWorkItem'
import ProjectJSON from '~/static/data/projects.json'
import VanillaTilt from 'vanilla-tilt'

export default {
  name: 'HomeWorks',
  components: { HomeWorkItem },
  data() {
    return {
      title: 'Featured Work',
      subTitle: 'Explore some of our latest website projects',
      projects: ProjectJSON.projects,
      works: []
    }
  },
  created() {
    this.works = this.projects.slice(0, 4)
  },
  mounted() {
    this.tiltInit()
  },
  methods: {
    tiltInit() {
      VanillaTilt.init(document.querySelectorAll('.work-item'), {
        reverse: true,
        scale: 1,
        max: 6,
        speed: 1000,
        'max-glare': 1,
        'glare-prerender': true,
        axis: 'x'
      })
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
    grid-template-columns: repeat(var(--work-col), 1fr);
    margin: 6rem 0;

    @include media-breakpoint-up(md) {
      --work-col: 2;
    }
  }
}
</style>
