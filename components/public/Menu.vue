<template>
  <div class="menu px-3 px-sm-0">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 mb-5 mb-md-0">
          <div>
            <ul class="nav flex-column">
              <li
                v-for="(linkItem, index) in links"
                :key="index"
                class="nav-item d-flex align-items-center p-0"
              >
                <div class="nav-number">
                  {{ index + 1 }}
                </div>
                <h1 class="mb-0" @click="menuItemClicked()">
                  <nuxt-link
                    class="nav-link"
                    :to="linkItem.path"
                    active-class="active"
                    exact
                    :data-hover="linkItem.name"
                    >{{ linkItem.name }}</nuxt-link
                  >
                </h1>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div
            class="d-flex flex-column flex-end justify-content-lg-end align-items-lg-end h-100"
          >
            <div class="menu-contact">
              <p class="menu-contact__item">
                <a href="#" class="menu-contact__link">{{
                  contactInfo.email
                }}</a>
              </p>
              <p class="menu-contact__item">
                <a href="#" class="menu-contact__link">{{
                  contactInfo.phone
                }}</a>
              </p>
              <p class="menu-contact__item">
                {{ contactInfo.address }}
              </p>
              <div class="menu-contact__item"><Socials /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Socials from '~/components/public/Socials'

export default {
  name: 'Menu',
  components: { Socials },
  data() {
    return {
      contactInfo: {
        email: 'hr-department@vietlinkads.com',
        phone: '+84 28 3910 7431',
        address: '67 Le Loi, Ben Nghe Ward, District 1, Ho Chi Minh city'
      },
      links: [
        {
          name: 'Work',
          path: '/'
        },
        {
          name: 'About',
          path: '/about'
        },
        {
          name: 'Contact',
          path: '/contact'
        }
      ]
    }
  },
  methods: {
    menuItemClicked() {
      let isMenuOpen = this.$store.state.header.isMenuOpen
      if (isMenuOpen) {
        isMenuOpen = !isMenuOpen
        this.$store.commit('header/toggleMenu', isMenuOpen)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/core';

.menu {
  --background-color: var(--theme-dark-mode-bg);
  --text-color: var(--theme-dark-mode-text);

  display: flex;
  align-items: center;
  color: var(--text-color);

  position: absolute;
  width: 100%;
  height: 100%;

  &-contact {
    @include media-breakpoint-up(lg) {
      width: 75%;
    }
    @include media-breakpoint-up(xl) {
      width: 50%;
    }

    &__link {
      padding: 0.5rem 0;
      position: relative;
      text-decoration: none;
      transition: all 0.35s var(--primary-ease);
      &:before {
        position: absolute;
        transition: all 0.35s var(--primary-ease);
      }

      &:before {
        bottom: 0;
        display: block;
        height: 1px;
        width: 0%;
        content: '';
        background-color: #c0392b;
      }

      &:hover:before {
        opacity: 1;
        width: 100%;
      }
    }
  }

  .nav {
    @include media-breakpoint-up(md) {
      &:not(:hover) {
        .nav-link {
          color: var(--text-color);
        }
      }
      &:hover {
        .nav-link {
          color: var(--gray);
        }
      }
    }

    .nav-item {
      & ~ .nav-item {
        margin-top: 2rem;
      }

      position: relative;

      .nav-number {
        display: inline-flex;
        position: absolute;
        font-weight: 700;
        transition: all 0.3s var(--primary-ease);
        opacity: 0;
        transform: translate3d(1rem, 0, 0);
        color: var(--primary);
      }

      .nav-link {
        line-height: 1.2;
        font-weight: bold;
        padding: 0px;
        transition: all 0.3s var(--primary-ease);
        transform: translate3d(0, 0, 0);

        @include media-breakpoint-down(sm) {
          color: var(--text-color);
        }

        @include media-breakpoint-up(lg) {
          font-size: 4.5rem;
        }
      }

      &:hover {
        .nav-number {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
        .nav-link {
          color: var(--text-color);
          transform: translate3d(2rem, 0, 0);
        }
      }
    }
  }
}
</style>
