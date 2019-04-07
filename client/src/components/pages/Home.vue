<template>
  <div class="home">
    <h1 class="home__title">Landing Page Recreations</h1>
    <div class="home__content">
      <div class="home__row">
        <router-link
          to="/buenos-aires"
          class="home__link home__link--ba"
        >
        </router-link>
        <router-link
          to="/booking"
          class="home__link home__link--booking"
          >
        </router-link>
      </div>
      <div class="home__row">
        <router-link
          to="/"
          class="home__link home__link--placeholder"
          >
        </router-link>
        <router-link
          to="/"
          class="home__link home__link--placeholder"
          >
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "~#/abstracts/mixins";
.home {
  flex: 1;
  height: 100vh;
  background-color: #bbb;
  display: flex;
  text-align: center;
  flex-direction: column;

  @include respond(tab-port) {
    height: 100%;
  }

  &__title {
    margin-top: 3rem;
    font-size: 3rem;
    color: #222;
  }

  &__content {
    margin: 2rem 10rem 5rem 10rem;
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  &__row {
    display: flex;
    flex: 1;
    @include respond(tab-port) {
      flex-direction: column;
      min-height: 80rem;
    }
  }

  &__link {
    flex: 1;
    margin: 2rem;
    border-radius: .6rem;
    overflow: hidden;
    background-size: cover;

    transform: scale(1);

    transition: transform .2s;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 0 1rem .2rem #fff;
    }

    &::before {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0,0,0,.8);
      height: 100%;
      width: 100%;
      color: #fff;

      &:hover {
        display: flex;
      }
    }

    &--ba {
      background-image: url('~img/ba-preview.jpg');

      &:hover {
        &::before {
          content: "Recreation of https://turismo.buenosaires.gob.ar/en"
        }
      }
    }

    &--booking {
      background-image: url('~img/booking-preview.png');
      &:hover {
        &::before {
          content: "WORK IN PROGRESS Recreation of https://booking.com"
        }
      }
    }

    &--placeholder {
      background-color: white;
      &::before {
        content: "Coming Soon";
        justify-content: center;
        align-items: center;
        background-color: inherit;
        color: #000;
        font-size: 1.8rem;
      }
    }
  }
}
</style>

