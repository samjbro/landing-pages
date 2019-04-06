<template>
  <div class="booking-search">
    <div class="booking-search__title">
      <h1 class="booking-search__header">
        Find deals for any season
      </h1>
      <h3 class="booking-search__subheader">
        From cosy country homes to funky city flats
      </h3>
    </div>
    <div>
      <form class="booking-search__form">
        <div class="booking-search__fields">
          <input type="text" placeholder="Where are you going?">
          <input type="date" placeholder="Check in - Check out">
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
.booking-search {
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  padding: 4.5rem 9rem;
  color: #383838;

  &__header {
    font-size: 2.4rem;
    font-weight: 600;
    margin-bottom: .3rem;
  }

  &__subheader {
    font-size: 1.4rem;
    font-weight: 400;
  }

}
</style>

