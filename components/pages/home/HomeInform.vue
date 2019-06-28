<template>
  <div id="inform1">
    <section
      class="inform-container section-container d-flex align-items-center section-padding"
    >
      <!-- <transition name="inform"> -->
      <div class="container">
        <div class="row no-gutters text-white">
          <div class="col-12">
            <p class="tagline mb-5">{{ title }}</p>
          </div>
          <div class="col-12 col-lg-10 offset-lg-1">
            <h5 class="title mb-0 font-weight-medium">{{ text }}</h5>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeInform',

  data() {
    return {
      show: false,
      title: 'INTRO',
      text:
        "I've helped companies solve business problems with Designs. I'm a bridge between Developers, Designers and Business to connect everyone, everything together."
    }
  },

  mounted() {
    // this.show = true
    this.watchIntersection()
  },
  methods: {
    watchIntersection() {
      const _this = this
      const io = new IntersectionObserver(
        entries => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              _this.show = true
            }
          }
        },
        {
          rootMargin: '0px',
          threshold: 0.5
        }
      )

      io.observe(document.getElementById('inform1'))
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/core';

.inform {
  &-enter-active {
    animation: inform-w-animation 1s var(--primary-ease);
  }
  &-leave-active {
    animation: inform-w-animation 0.4s var(--primary-ease) reverse;
  }
}

.inform-container {
  --bg-width: 100%;

  @keyframes inform-w-animation {
    0% {
      --bg-width: 0%;
    }

    100% {
      --bg-width: 100%;
    }
  }

  .title {
    line-height: 1.8;
    letter-spacing: 1px;
  }

  min-height: 100vh;

  &::after {
    content: '';
    position: absolute;
    background-color: black;
    width: var(--bg-width);
    height: 100%;
    z-index: -1;
    transition: all 0.6s var(--primary-ease);
  }
}
</style>
