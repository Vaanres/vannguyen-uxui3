<template>
  <div class="contact">
    <p class="contact__item">
      <a href="#" class="contact__link">{{ contactInfo.email }}</a>
    </p>
    <p class="contact__item">
      <a href="#" class="contact__link">{{ contactInfo.phone }}</a>
    </p>
    <p class="contact__item">
      {{ contactInfo.address }}
    </p>
    <div class="contact__item"><Socials :theme="theme" /></div>
  </div>
</template>

<script>
import Socials from '~/components/public/Socials'
export default {
  name: 'ContactInfo',
  components: { Socials },
  props: {
    theme: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      contactInfo: {
        email: 'vaanres@gmail.com',
        phone: '+84 866 485 946',
        address: 'District 1, Ho Chi Minh city, Vietnam'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/core';

.contact {
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
</style>
