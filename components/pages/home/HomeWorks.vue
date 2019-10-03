<template>
  <section class="work section-container">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="row section-header">
            <transition name="slide-up">
              <div v-if="showHeader" class="col-12">
                <h2>{{ title }}</h2>
                <p class="text-secondary">{{ subTitle }}</p>
              </div>
            </transition>
          </div>

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
            <div class="col-12 section-more">
              <transition name="slide-up">
                <div
                  v-if="showBtnMore"
                  class="d-flex justify-content-center align-items-center"
                >
                  <btn-link
                    class="btn-hero"
                    link="https://www.behance.net/Vaanres"
                    rel="noreferrer"
                    >SEE MORE PROJECTS</btn-link
                  >
                </div>
              </transition>
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
      default: 8
    }
  },
  data() {
    return {
      showHeader: false,
      showBtnMore: false,
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
    this.watchIntersection()
    this.watchIntersectionBtn()
  },
  methods: {
    watchIntersection() {
      const _this = this
      const io = new IntersectionObserver(
        entries => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              _this.showHeader = true
            }
          }
        },
        {
          rootMargin: '0px',
          threshold: 0.5
        }
      )

      io.observe(document.querySelector('.work .section-header'))
    },
    watchIntersectionBtn() {
      const _this = this
      const io = new IntersectionObserver(
        entries => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              _this.showBtnMore = true
            }
          }
        },
        {
          rootMargin: '0px',
          threshold: 0.5
        }
      )

      io.observe(document.querySelector('.work .section-more'))
    },
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
