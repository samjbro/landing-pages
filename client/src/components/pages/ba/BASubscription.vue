<template>
   <form class="ba-subscription">
    <div class="ba-subscription__group">
      <label for="name">Name</label>
      <input type="text" id="name">
    </div>
    <div class="ba-subscription__group">
      <label for="email">Email Address *</label>
      <input type="email" id="email" required>
    </div>
    <div class="ba-subscription__group">
      <label>Subscribe to *</label>
      <div class="ba-subscription__checkbox-group">
        <input type="checkbox" id="guided-tours">
        <label for="guided-tours">Guided tours</label>
      </div>
      <div class="ba-subscription__checkbox-group">
        <input type="checkbox" id="activities">
        <label for="activities">Activities and experiences</label>
      </div>
      <div class="ba-subscription__checkbox-group">
        <input type="checkbox" id="what-to-do">
        <label for="what-to-do">What to do in Buenos Aires</label>
      </div>
      <div class="ba-subscription__checkbox-group">
        <input type="checkbox" id="first-time">
        <label for="first-time">First time in the city</label>
      </div>
    </div>
    <div class="ba-subscription__captcha g-recaptcha" data-sitekey="getsitekeyoncereadyforprod"></div>
    <button class="ba-subscription__submit">Submit</button>
    <div class="ba-subscription__group ba-subscription__group--italic">
      <div class="ba-subscription__checkbox-group">
        <input type="checkbox" id="privacy" required>
        <label for="privacy">Privacy policy *</label>
      </div>
    </div>
  </form>
</template>

<style lang="scss">
.ba-subscription {
  &__group {
    display: flex;
    flex-direction: column;

    &--italic {
      font-style: italic;
    }

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
    label {
      color: #808080;
      font-size: 1.4rem;
      font-weight: 600;
      padding: .6rem 0;
    }

    input {
      width: 90%;
      border-radius: .4rem;
      font-size: 1.4rem;
      padding: .3rem .5rem;
      border: none;
      &:focus {
        outline: none;
        box-shadow: 0 0 .3rem .2rem #fff;
      }
    }
  }

  &__checkbox-group {
    display: flex;
    align-items: center;
    label {
      padding: .2rem 0;
    }
    input {
      width: inherit;
      margin-right: .8rem;
      &:focus {
        outline: inherit;
        box-shadow: none;
      }
    }
  }

  &__captcha {
    margin-bottom: 1rem;
  }

  &__submit {
    padding: .6rem 1.2rem;
    border-radius: .4rem;
    background-color: #FCD959;
    color: #333;
    outline: none;
    font-weight: 600;
    font-size: 1.4rem;
    margin-bottom: .4rem;
    cursor: pointer;

    &:hover {
      background-color: #FDD206;
      color: #685822;
    }
    &:active {
      background-color: #FCD959;
    }
  }
}
</style>

