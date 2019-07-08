<template>
  <section class="hero d-flex align-items-center">
    <div class="hero__bg"></div>
    <div v-show="show" class="container">
      <div class="row">
        <div class="col-12 col-md-8">
          <p class="tagline tagline--primary">{{ tagline }}</p>
          <h1 class="title mb-4">{{ title }}</h1>
          <p class="subTitle sub-title">
            {{ subTitle }}
          </p>
          <btn-action class="btn-hero mt-5" link="/about"
            >Know more about me</btn-action
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BtnAction from '~/components/public/BtnAction'

export default {
  name: 'HomeHero',
  components: { BtnAction },
  data() {
    return {
      show: false,
      tagline: 'I AM A',
      title: 'Product Designer',
      subTitle: 'I combine STRATEGY, TECHNOLOGY and DESIGN to solve problems'
    }
  },
  mounted() {
    this.charmingText('.hero .tagline', '.hero .title')
    this.animateText()
  },
  methods: {
    animateText() {
      const _this = this
      const headerTimeline = this.$anime.timeline()

      headerTimeline
        .add({
          targets: '.hero .tagline span',
          translateX: [40, 0],
          translateZ: 0,
          opacity: [0, 1],
          easing: 'cubicBezier(.475,.425,0,.995)',
          duration: 400,
          autoplay: false,
          delay: _this.$anime.stagger(30, { start: 250 }),
          complete() {
            setTimeout(() => {
              if (
                _this.isExisted(document.querySelector('.hero .tagline')) &&
                _this.isExisted(_this.tagline)
              ) {
                document.querySelector('.hero .tagline').innerHTML =
                  _this.tagline
              }
            }, 1000)
          }
        })
        .add(
          {
            targets: '.hero .title span',
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: 'cubicBezier(.475,.425,0,.995)',
            duration: 800,
            autoplay: false,
            delay: _this.$anime.stagger(30, { start: 500 }),
            complete() {
              setTimeout(() => {
                if (
                  _this.isExisted(document.querySelector('.hero .title')) &&
                  _this.isExisted(_this.title)
                ) {
                  document.querySelector('.hero .title').innerHTML = _this.title
                }
              }, 1000)
            }
          },
          '-=600'
        )
        .add(
          {
            targets: '.hero .subTitle',
            translateY: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: 'cubicBezier(.475,.425,0,.995)',
            duration: 800,
            autoplay: false,
            complete() {
              setTimeout(() => {
                if (
                  _this.isExisted(document.querySelector('.hero .subTitle')) &&
                  _this.isExisted(_this.subTitle)
                ) {
                  document.querySelector('.hero .subTitle').innerHTML =
                    _this.subTitle
                }
              }, 1000)
            }
          },
          '-=600'
        )
        .add(
          {
            targets: '.hero .btn-hero',
            translateY: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: 'cubicBezier(.475,.425,0,.995)',
            duration: 800,
            autoplay: false
          },
          '-=600'
        )

      headerTimeline.pause()
      this.show = true
      headerTimeline.play()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/core';

.hero {
  height: 100vh;
  transition: all 0.3s var(--primary-ease);
  &__bg {
    --bg-opacity: 0.05;
    --bg-size: 80%;
    --bg-position: 95% 50%;

    transition: all 0.6s var(--primary-ease);
    z-index: -1;
    background-image: url('/images/vietnam-dot.svg');
    background-repeat: no-repeat;

    height: 100%;
    width: 100%;
    position: absolute;
    opacity: var(--bg-opacity);
    background-size: var(--bg-size);
    background-position: var(--bg-position);

    @include media-breakpoint-up(sm) {
      --bg-position: 90% 50%;
      --bg-size: 25%;
    }
  }
}
</style>
