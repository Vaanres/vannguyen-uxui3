<template>
  <a
    class="btn btn-action text-uppercase d-inline-flex align-items-center"
    :href="link"
    target="_blank"
  >
    <small class="font-weight-medium"
      ><slot />
      <font-awesome-icon
        class="d-inline-block position-relative v-icon"
        :icon="['fa', 'arrow-right']"
      />
    </small>
  </a>
</template>

<script>
export default {
  name: 'BtnAction',
  props: {
    link: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-action {
  --btn-size: 48px;

  border-radius: 2rem;
  position: relative;
  height: var(--btn-size);
  padding-left: 24px;
  padding-right: 24px;
  cursor: pointer;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: var(--btn-size);
    height: var(--btn-size);
    border-radius: 2rem;
    background: transparentize($color: black, $amount: 0.95);
    transition: all 0.35s var(--primary-ease);
  }

  .v-icon {
    margin-left: 0.5rem;
    transition: all 0.35s var(--primary-ease);
  }

  &:hover {
    &:before {
      width: 100%;
    }

    .v-icon {
      margin-left: 1rem;
    }
  }

  box-shadow: none;
  outline: none;
  border: 0px solid transparent;
}
</style>
