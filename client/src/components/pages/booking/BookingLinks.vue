<template>
  <div class="booking-links">
    <div class="booking-links__link">
      Accommodation
    </div>
    <div class="booking-links__link">
      Flights
    </div>
    <div class="booking-links__link">
      Car rentals
    </div>
    <div class="booking-links__link">
      Airport taxis
    </div>
  </div>
</template>

<style lang="scss">
.booking-links {
  display: flex;
  margin-left: -.2rem;
  cursor: pointer;
  &__link {
    font-size: 1.4rem;
    padding: 1rem 1rem;
    border-radius: .4rem;
    &:not(:last-child) {
      margin-right: 3.2rem;
    }
    &:hover {
      background-color: rgba(255,255,255, .1);
    }
  }
}
</style>
