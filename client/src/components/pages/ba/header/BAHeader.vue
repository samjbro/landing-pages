<template>
  <div class="ba-header">
    <BANavigation />
    <video class="ba-header__bg" autoplay muted loop>
      <source src="~vid/ba/ba-video.mp4" />
    </video>
    <div class="ba-header__title-wrapper">
      <div class="ba-header__title">Buenos Aires Many Passions</div>
    </div>
</div>
</template>

<script>
import BANavigation from './BANavigation'
export default {
  components: { BANavigation }
}
</script>

<style lang="scss">
@import "~#/abstracts/mixins";
@import "~#/abstracts/variables";
.ba-header {
  border-bottom: 1rem solid $color-ba-orange-2;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @include respond(tab-port) {
    border-bottom: none;
  }

  &__bg {
    width: 100%;
    @include respond(tab-port) {
      display: none;
    }
  }

  &__title-wrapper {
    position: absolute;
    bottom: 1rem;
    width: $ba-content-width-large;

    @include respond(tab-land) {
      width: 100%
    }
    @include respond(tab-port) {
      display: none;
    }

  }
  &__title {
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: 900;
    color: #fff;
    text-shadow: black .2rem .2rem .2rem;
    width: 25rem;
    @include respond(tab-land) {
      width: 100%;
      text-align: center;
    }
  }
}
</style>
