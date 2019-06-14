<template>
  <a
    :id="id"
    class="work-item text-decoration-none"
    target="_blank"
    :href="item.url"
    rel="noopener noreferrer"
  >
    <div class="row">
      <div class="col-12">
        <div class="image-container" :style="{ transform: imageTranslate3D }">
          <div class="image-wrapper">
            <img v-lazy="imagePath" :alt="item.name" class="img-fluid" />

            <transition name="curtain">
              <div v-if="isCurtainShow" class="image-curtain"></div>
            </transition>
          </div>
        </div>

        <transition name="content">
          <div v-if="isContentShow" class="content-container">
            <div
              class="content mt-3"
              :style="{ transform: contentTranslate3D }"
            >
              <small v-if="item.fields">
                <p
                  class="description font-weight-medium text-secondary text-uppercase mb-1"
                >
                  {{ item.fields.join(' • ') }}
                </p>
              </small>
              <h5 class="text-dark">{{ item.name }}</h5>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'HomeWorkItem',
  props: {
    id: {
      type: Number,
      default: 0
    },
    item: {
      type: Object,
      default: function() {}
    }
  },
  data() {
    return {
      showCount: 0,
      isContentShow: false,
      isCurtainShow: true,
      isWatchParallaxScroll: false,
      itemStyle: {
        card: {
          translateY: 0
        },
        image: {
          translateY: 0
        },
        content: {
          translateY: 0
        }
      }
    }
  },
  computed: {
    imagePath() {
      return this.item.covers['808']
    },
    cardTranslate3D() {
      let x = this.itemStyle.image.translateY
      if (!(this.id % 2 === 0)) {
        x = 60
      }
      return `translateY(${x}px)`
    },
    imageTranslate3D() {
      return `translateY(${this.itemStyle.image.translateY}px)`
    },
    contentTranslate3D() {
      return `translateY(${this.itemStyle.content.translateY}px)`
    }
  },
  mounted() {
    this.watchIntersection()
  },
  beforeDestroy() {
    if (this.isWatchParallaxScroll) {
      this.isWatchParallaxScroll = false
      window.removeEventListener('scroll', this.watchParallaxScroll)
    }
  },
  methods: {
    watchParallaxScroll() {
      const rect = document.getElementById(this.id).getBoundingClientRect()
      if (rect.top <= 100) {
        this.itemStyle.image.translateY = (rect.top - 100) * 0.15
        this.itemStyle.content.translateY =
          this.itemStyle.image.translateY * 0.5
      } else {
        this.itemStyle.image.translateY = 0
        this.itemStyle.content.translateY = 0
      }
    },
    watchIntersection() {
      const _this = this
      const io = new IntersectionObserver(
        entries => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              _this.isCurtainShow = false
              _this.isContentShow = true

              if (!_this.isWatchParallaxScroll) {
                _this.isWatchParallaxScroll = true
                window.addEventListener('scroll', _this.watchParallaxScroll)
              }
            } else if (_this.isWatchParallaxScroll) {
              _this.isWatchParallaxScroll = false
              window.removeEventListener('scroll', _this.watchParallaxScroll)
            }

            // console.log(
            //   `${entry.target.id} is in view ${entry.isIntersecting} , ${entry.intersectionRatio}`
            // )
          }
        },
        {
          rootMargin: '0px',
          threshold: 0.5
        }
      )

      io.observe(document.getElementById(this.id))
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/core';

@keyframes curtain {
  0% {
    height: 100%;
  }

  100% {
    height: 0%;
  }
}

.curtain {
  &-enter-active {
    animation: curtain 0.6s var(--primary-ease) reverse;
  }
  &-leave-active {
    animation: curtain 0.8s var(--primary-ease);
  }
}

.content {
  &-enter-active {
    transition: all 1s var(--primary-ease);
  }
  &-leave-active {
    transition: all 0.6s var(--primary-ease);
  }

  &-enter,
  &-leave-to {
    transform: translateY(6rem);
    opacity: 0;
  }
}

.work-item-container {
  background-color: red;
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect Ratio */
  position: relative; /* If you want text inside of it */
}

.work-item {
  position: relative;
  transition: all 0.3s var(--primary-ease);

  .content {
    //transform: translateZ(60px);

    &:hover {
      text-decoration: none;
    }
  }
  .image {
    &-container {
      width: 100%;
      padding-top: 75%;
      position: relative;
      transition: all 0.6s var(--primary-ease);
    }
    &-wrapper {
      overflow: hidden;
      transition: all 0.6s var(--primary-ease);
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;

      .image-curtain {
        top: 0px;
        position: absolute;
        display: flex;
        height: 100%;
        width: 100%;
        background: $gray-100;
        transition: all 0.6s var(--primary-ease);
      }

      img {
        transform-origin: 50% 50%;
        transition: all 3s ease-in-out;
      }

      &:hover {
        transform: scale(1.05);
        box-shadow: 0px 2rem 8rem
          transparentize($color: $gray-700, $amount: 0.6);
      }
    }
  }
}
</style>
