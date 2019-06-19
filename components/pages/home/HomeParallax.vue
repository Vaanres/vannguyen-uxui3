<template>
  <div class="MainContainer">
    <div v-lazy:background-image="bg" class="ParallaxContainer">
      // Headlines for the page
    </div>

    <div class="ContentContainer">
      <div class="Content">
        <p>
          CSS is often more powerful than people give it credit for. A number of
          common tasks which generally rely on JavaScript libraries can often be
          implemented in CSS without much effort. A great example of this is the
          parallax effect which is currently in vogue. (Where background images
          scroll more slowly than the page content to give an illusion of
          distance.)
        </p>
        <p>
          CSS is often more powerful than people give it credit for. A number of
          common tasks which generally rely on JavaScript libraries can often be
          implemented in CSS without much effort. A great example of this is the
          parallax effect which is currently in vogue. (Where background images
          scroll more slowly than the page content to give an illusion of
          distance.)
        </p>
        <p>
          CSS is often more powerful than people give it credit for. A number of
          common tasks which generally rely on JavaScript libraries can often be
          implemented in CSS without much effort. A great example of this is the
          parallax effect which is currently in vogue. (Where background images
          scroll more slowly than the page content to give an illusion of
          distance.)
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeParallax',
  data() {
    return {
      bg: '/images/bg-inform.jpg',
      bg2: '/images/bg-inform2.jpg'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/core';
//(perspective — distance) / perspective = scaleFactor

$distance: 3px;
$perspective: 8px;
@function parallax-scale-factor($z-distance) {
  @return ($perspective - $z-distance) / $perspective;
}

.MainContainer {
  perspective: 1px;
  transform-style: preserve-3d;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
}

.ParallaxContainer {
  display: flex;
  flex: 1 0 auto;
  position: relative;
  height: 100vh;
  transform: translateZ(-1px) scale(2);
  z-index: -1;
}

.ContentContainer {
  display: block;
  position: relative;
  background-color: white;
  z-index: 1;
}
</style>
