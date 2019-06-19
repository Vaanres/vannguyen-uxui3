<template>
  <div
    class="btn-scroll d-none d-sm-inline-flex flex-column align-items-center position-fixed"
  >
    <div class="line-wrapper d-flex align-items-center justify-content-center">
      <div class="line"></div>
    </div>
    <div>
      <span class="text">SCROLL</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BtnScroll'
}
</script>

<style lang="scss" scoped>
.btn-scroll {
  right: 3rem;
  bottom: 3rem;

  .line-wrapper {
    width: 100%;
    height: 100%;
  }

  .line {
    height: 4rem;
    width: 1px;
    background-color: black;
    transition: all 0.3s ease-in-out;
    transform-origin: bottom;
    animation: line-moving 3s infinite;
    border-radius: 1rem;
    position: relative;
    bottom: 5px;
  }

  .text {
    font-size: 12px;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    letter-spacing: 0.2rem;
    font-weight: 500;
  }
}

@keyframes line-moving {
  0% {
    transform: scale(1, 1);
  }

  100% {
    transform: scale(1, 0) translate3d(0, 0, 300px);
  }
}
</style>
