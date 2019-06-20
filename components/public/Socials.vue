<template>
  <div class="socials d-flex" :class="getTheme">
    <a
      class="social-link pr-3 mr-3 transition__default"
      aria-label="See me on Twitter"
      title="See me on Twitter"
      target="_blank"
      href="https://twitter.com/vaanres"
    >
      <span class="d-block"> <font-awesome-icon :icon="iconTwitter"/></span>
    </a>
    <a
      class="social-link pr-3 mr-3 transition__default"
      aria-label="See me on Facebook"
      title="See me on Facebook"
      target="_blank"
      href="https://www.facebook.com/vaanres"
    >
      <span class="d-block"><font-awesome-icon :icon="iconFacebook"/></span>
    </a>

    <a
      class="social-link pr-3 mr-3 transition__default"
      aria-label="See me on LinkedIn"
      title="See me on LinkedIn"
      target="_blank"
      href="https://www.linkedin.com/in/nguyen-le-van/"
    >
      <span class="d-block"> <font-awesome-icon :icon="iconLinkedin"/></span>
    </a>

    <a
      class="social-link pr-3 mr-3 transition__default"
      aria-label="See me on Behance"
      title="See me on Behance"
      target="_blank"
      href="https://behance.net/vaanres"
    >
      <span class="d-block"><font-awesome-icon :icon="iconBehance"/></span>
    </a>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faFacebookF,
  faFacebookMessenger,
  faBehance,
  faTwitter,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'

export default {
  name: 'Socials',
  components: {
    FontAwesomeIcon
  },
  props: {
    theme: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      tooltip: { delay: { show: 300, hide: 100 } },
      iconMessenger: faFacebookMessenger,
      iconFacebook: faFacebookF,
      iconBehance: faBehance,
      iconTwitter: faTwitter,
      iconLinkedin: faLinkedinIn
    }
  },
  computed: {
    getTheme() {
      return this.isExisted(this.theme) ? `socials__${this.theme}` : ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/core';

.socials {
  --link-default: var(--gray);
  --link-hover: var(--dark);

  &__dark {
    --link-hover: var(--white);
  }

  .social-link {
    transition: all 0.3s var(--primary-ease);
    color: var(--link-default);
    &:hover {
      color: var(--link-hover);
    }
  }

  // &:not(:hover) {
  //   .social-link {
  //     color: white;
  //   }
  // }
  // &:hover {
  //   .social-link {
  //     color: var(--dark);
  //   }
  // }

  // .social-link {
  //   transition: all 0.25s var(--primary-ease);
  //   &:hover {
  //     color: white;
  //   }
  // }
}
</style>
