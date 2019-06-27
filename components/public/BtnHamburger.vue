<template>
  <div
    class="hamburger-container d-flex justify-content-center align-items-center"
    @click="buttonClicked()"
  >
    <div
      class="hamburger-wrapper d-flex justify-content-center align-items-center"
      :class="{ dark: !isActive }"
    >
      <div class="hamburger-bg"></div>
      <button
        :class="{ 'is-active': isActive }"
        class="hamburger hamburger--spin"
        type="button"
        aria-label="BtnHamburger"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BtnHamburger',
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isActive: this.active
    }
  },
  watch: {
    active: function(newValue, oldValue) {
      this.isActive = this.active
    }
  },
  methods: {
    buttonClicked(e) {
      this.isActive = !this.isActive
      this.$store.commit('header/toggleMenu', this.isActive)
      this.$emit('clicked')
    }
  }
}
</script>

<style lang="scss" scoped>
.hamburger-container {
  --background-color: var(--theme-light-mode-bg);
  --text-color: var(--theme-light-mode-text);
  --hamburger-size: 40px;
  --hamburger-size-expanded: 48px;
  width: var(--hamburger-size-expanded);
  height: var(--hamburger-size-expanded);
  cursor: pointer;

  .hamburger-wrapper {
    &.dark {
      --background-color: var(--theme-dark-mode-bg);
      --text-color: var(--theme-dark-mode-text);
    }

    .hamburger-bg {
      background-color: var(--background-color);
      position: absolute;
      width: var(--hamburger-size);
      height: var(--hamburger-size);
      border-radius: var(--hamburger-size);
      transition: all 0.2s var(--primary-ease);
    }

    &:hover {
      --hamburger-size: var(--hamburger-size-expanded);
      .hamburger {
        &:not(.is-active) {
          .hamburger-inner,
          .hamburger-inner:after {
            width: 100%;
          }
        }
      }
    }

    .hamburger {
      width: var(--hamburger-size);
      height: var(--hamburger-size);
      &-inner,
      &-inner:before,
      &-inner:after {
        transition: all 0.25s var(--primary-ease);
        background-color: var(--text-color);
      }

      &:not(.is-active) {
        .hamburger-inner {
          width: 75%;
        }

        .hamburger-inner:after {
          width: 50%;
        }
      }
    }
  }
}
</style>
