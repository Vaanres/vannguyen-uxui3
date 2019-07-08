<template>
  <section v-show="show">
    <div class="menu-cover" :class="{ full: getMenuOpenStatus }"></div>
    <header
      class="container-fluid position-fixed"
      :class="{ 'bg-black': getMenuOpenStatus }"
    >
      <div
        class="d-flex justify-content-between align-items-center py-4 px-lg-5"
      >
        <nuxt-link to="/">
          <Logo
            v-show="isLogoDisplay"
            :is-light-logo="getMenuOpenStatus ? true : false"
          />
        </nuxt-link>

        <div></div>
        <btn-hamburger
          :active="getMenuOpenStatus"
          @clicked="onClickBtnHamburger"
        />
      </div>
    </header>
    <div v-show="getMenuOpenStatus">
      <Menu />
    </div>
  </section>
</template>
<script>
import BtnHamburger from '~/components/public/BtnHamburger'
import Menu from '~/components/public/Menu'
import Logo from '~/components/public/Logo'

export default {
  name: 'Header',
  components: { BtnHamburger, Menu, Logo },
  data() {
    return {
      show: false,
      isLogoDisplay: true,
      animateLogoInObject: null,
      animateLogoOutObject: null,
      animateMenuItemObject: null
    }
  },
  computed: {
    getMenuOpenStatus() {
      return this.$store.state.header.isMenuOpen
    }
  },
  watch: {
    getMenuOpenStatus(newValue, oldValue) {
      if (this.isMobile()) {
        this.animeLogo(newValue)
      }
      this.animeMenuItem(newValue)

      if (newValue) {
        document.body.classList.add('overflow-hidden')
      } else {
        document.body.classList.remove('overflow-hidden')
      }
    }
    // $route: function() {
    //   if (this.isMenuOpen) {
    //     this.isMenuOpen = !this.isMenuOpen
    //     this.$store.commit('header/toggleMenu', this.isMenuOpen)
    //   }
    // }
  },

  mounted() {
    this.animeReady()
    this.show = true
    if (!this.getMenuOpenStatus) {
      this.animateHeader()
    }
  },
  methods: {
    animeMenuItem(isMenuOpen) {
      if (isMenuOpen) {
        this.animateMenuItemObject.play()
      }
    },
    animeLogo(isMenuOpen) {
      this.animateLogoOutObject.pause()
      this.animateLogoInObject.pause()

      if (isMenuOpen) {
        this.animateLogoOutObject.play()
      } else {
        this.animateLogoInObject.play()
      }
    },

    handleScroll(e) {
      // const root = document.documentElement

      if (!this.getMenuOpenStatus) {
        const h = Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0
        )

        const y = window.pageYOffset
        const a = 1 - y / h

        const startingPoint = 0.88
        if (a < startingPoint) {
          if (this.isLogoDisplay) {
            this.isLogoDisplay = false
            // this.animateLogoOutObject.play()
          }
        } else if (a >= startingPoint) {
          if (!this.isLogoDisplay) {
            this.isLogoDisplay = true
            // this.animateLogoInObject.play()
          }
        }
      }

      // root.style.setProperty('--logo-opacity', a)
      // root.style.setProperty('--logo-scale', a)
    },
    animeReady() {
      const _this = this
      this.animateMenuItemObject = this.$anime
        .timeline()
        .add({
          targets: '.nav .nav-item',
          translateX: [_this.$anime.stagger([-120, -40]), 0],
          translateZ: 0,
          opacity: [0, 1],
          easing: 'easeInOutQuad',
          duration: 400,
          autoplay: false,
          delay: _this.$anime.stagger(100)
        })
        .add(
          {
            targets: '.menu-contact .menu-contact__item',
            translateX: [_this.$anime.stagger([-120, -40]), 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: 'easeInOutQuad',
            duration: 400,
            autoplay: false,
            delay: _this.$anime.stagger(100)
          },
          '-=300'
        )

      this.animateLogoInObject = this.$anime({
        targets: '.main-logo span',
        translateX: [30, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 300,
        autoplay: false,
        delay(el, i) {
          return 500 + 30 * i
        }
      })

      this.animateLogoOutObject = this.$anime({
        targets: '.main-logo span',
        translateX: [0, -30],
        opacity: [1, 0],
        easing: 'easeInExpo',
        duration: 150,
        autoplay: false,
        delay(el, i) {
          return 100 + 30 * i
        }
      })
    },
    animateHeader() {
      this.$anime({
        targets: 'header',
        translateY: [-40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: 'cubicBezier(.475,.425,0,.995)',
        delay: 0,
        duration: 1000
      })
    },

    onClickBtnHamburger(value) {
      // if (this.getMenuOpenStatus) {
      //   document.body.classList.add('overflow-hidden')
      // } else {
      //   document.body.classList.remove('overflow-hidden')
      // }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/core';

header {
  z-index: 1;
}

.menu-cover {
  background-color: var(--theme-dark-mode-bg);
  color: var(--theme-dark-mode-text);
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 0;
  top: 0;
  transition: all 0.3s var(--primary-ease);

  &.full {
    border-radius: 0;
    padding: 0 !important;
    position: absolute;
    height: 100%;
    top: 0;
  }
}
</style>
