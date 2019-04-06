<template>
  <div class="booking-header">
    <div class="booking-header__row">
      <div class="booking-header__logo">
        <img src="~img/booking/booking-logo.png" alt="logo">
      </div>
      <BookingManagement />
    </div>
    <div class="booking-header__row">
      <BookingLinks />
    </div>
  </div>
</template>

<script>
import BookingManagement from './BookingManagement'
import BookingLinks from './BookingLinks'
export default {
  components: { BookingManagement, BookingLinks }
}
</script>

<style lang="scss">
@import "~#/abstracts/variables";
.booking-header {
  background-color: $color-booking-blue;
  color: #fff;
  padding: 0 10.1rem 1.8rem 9.2rem; 

  &__row {
    padding-top: 1.2rem;
    display: flex;
    justify-content: space-between;
  }

  &__logo {
    width: 15rem;
    img {
      width: 100%;
    }
  }
}
</style>
