<template>
  <div class="booking-management">
    <div class="booking-management__currency">
      <span class="booking-management__currency-symbol">
        $
      </span>
       (ARS)
    </div>
    <div class="booking-management__flag" data-title="Select your language">
      <img src="~img/union-jack.png" alt="flag-en">
    </div>
    <button class="booking-management__button booking-management__button--outline">
      List your property
    </button>
    <button class="booking-management__button">
      Register
    </button>
    <button class="booking-management__button">
      Sign in
    </button>
  </div>
</template>

<style lang="scss">
.booking-management {
  display: flex;
  align-items: center;

  > * {
    &:not(:last-child) {
      margin-right: 1.8rem;
    }
  }

  &__currency {
    padding-right: 2rem;
    font-size: 1.1rem;
  }
  &__currency-symbol {
    font-weight: 900;
    font-size: 1.6rem;
  }

  &__flag {
    width: 1.8rem;
    img {
      width: 100%;
    }
  }

  &__button {
    font-size: 1.3rem;
    font-weight: 600;
    padding: .6rem .8rem;
    border-radius: .3rem;
    cursor: pointer;

    &:hover {
      color: #0077cc;
    }
    &--outline {
      background-color: inherit;
      color: inherit;
      border: 1px solid #fff;
      padding: .7rem .9rem;

      &:hover {
        color: inherit;
        background-color: rgba(255,255,255,.1);
      }
    }
  }
}
</style>
