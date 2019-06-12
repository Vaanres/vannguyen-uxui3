<template>
  <a
    :id="id"
    class="work-item text-decoration-none"
    target="_blank"
    :href="item.url"
    rel="noopener noreferrer"
  >
    <transition name="content">
      <div v-show="isContentShow" class="row">
        <div class="col-12">
          <div class="image-container">
            <div class="image-wrapper">
              <img :src="imagePath" :alt="item.name" class="img-fluid" />
              <transition name="curtain">
                <div v-show="isCurtainShow" class="image-curtain"></div>
              </transition>
            </div>
          </div>

          <transition name="content">
            <div v-show="isContentShow" class="content-container">
              <div class="content p-3">
                <small v-if="item.fields">
                  <p
                    class="description font-weight-medium text-secondary text-uppercase mb-1"
                  >
                    {{ item.fields.join(' • ') }}
                  </p>
                </small>
                <h4 class="text-dark">{{ item.name }}</h4>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </transition>
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
      isCurtainShow: true
    }
  },
  computed: {
    imagePath() {
      return this.item.covers['808']
    }
  },
  mounted() {
    this.watchScroll()
  },
  methods: {
    watchScroll() {
      const _this = this
      const io = new IntersectionObserver(entries => {
        for (const entry of entries) {
          // _this.isCurtainShow = !entry.isIntersecting
          // _this.isContentShow = entry.isIntersecting
          if (entry.isIntersecting) {
            _this.isCurtainShow = false
            _this.isContentShow = true
          }
          // console.log(`${entry.target.id} is in view ${entry.isIntersecting} `)
        }
      })

      io.observe(document.getElementById(this.id))

      // document.querySelectorAll('.work-item').forEach(elem => io.observe(elem))
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
    animation: curtain 1s var(--primary-ease);
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
    transform: translateY(2rem);
  }
}

.work-item {
  position: relative;

  .content {
    //transform: translateZ(60px);

    &:hover {
      text-decoration: none;
    }
  }
  .image {
    &-wrapper {
      overflow: hidden;
      position: relative;

      .image-curtain {
        top: 0px;
        position: absolute;
        display: flex;
        height: 100%;
        width: 100%;
        background: $gray-100;
      }

      img {
        transform-origin: 50% 50%;
        transition: all 3s ease-in-out;
        min-height: 300px;
        // .image-curtain {
        //   animation: curtain 0.6s ease-in-out forwards;
        // }
      }

      &:hover {
        img {
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>
