<template>
  <section class="section-container">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>{{ title }}</h2>
          <p class="text-secondary">{{ subTitle }}</p>
          <div class="row">
            <div class="col-12">
              <div class="works section-container">
                <home-work-item
                  v-for="(item, index) in works"
                  :id="index"
                  :key="index"
                  :item="item"
                />
              </div>
            </div>
            <div class="col-12">
              <div class="d-flex justify-content-center align-items-center">
                <btn-link
                  class="btn-hero"
                  link="https://www.behance.net/Vaanres"
                  >SEE MORE PROJECTS</btn-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VanillaTilt from 'vanilla-tilt'
import HomeWorkItem from '~/components/pages/home/HomeWorkItem'
import ProjectJSON from '~/static/data/projects.json'
import BtnLink from '~/components/public/BtnLink'
// import BtnAction from '~/components/public/BtnAction'

export default {
  name: 'HomeWorks',
  components: { HomeWorkItem, BtnLink },
  props: {
    itemQuantity: {
      type: Number,
      default: 6
    }
  },
  data() {
    return {
      title: 'Featured Work',
      subTitle: 'Explore some of our latest website projects',
      projects: ProjectJSON.projects,
      works: []
    }
  },
  created() {
    this.works = this.projects.slice(0, this.itemQuantity)
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
        speed: 400,
        easing: 'cubic-bezier(.475,.425,0,.995)'

        // axis: 'x'
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

    @include media-breakpoint-up(md) {
      --work-col: 2;
    }
  }
}
</style>
