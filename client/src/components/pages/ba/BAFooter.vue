<template>
  <div class="ba-footer">
    <div class="ba-footer__header">
      <img src="~img/ba/travel-logo.png" alt="travel-logo">
    </div>
    <div class="ba-footer__content">
      <div class="ba-footer__col">
        <h1 class="ba-footer__title ba-footer__title--blue">
          <a href="#">Contact</a>
        </h1>
        <div>
          <h3 class="ba-footer__subtitle u-margin-btm-5rem">Do you have any suggestions?</h3>
        </div>
        <div class="ba-footer__social">
          <h1 class="ba-footer__title">Social networks</h1>
          <div class="ba-footer__social-links">
            <div><img src="~img/ba/footer-fb.png" alt="facebook"></div>
            <div><img src="~img/ba/footer-tw.png" alt="twitter"></div>
            <div><img src="~img/ba/footer-in.png" alt="instagram"></div>
            <div><img src="~img/ba/footer-yt.png" alt="youtube"></div>
          </div>
        </div>
        <div class="ba-footer__apps">
          <h1 class="ba-footer__title">Apps</h1>
          <div class="ba-footer__link">
            <span>Travel Buenos Aires</span>
            <a href="#"><img src="~img/ba/Android.png" alt="android"></a>
            <a href="#"><img src="~img/ba/IOS.png" alt="ios"></a>
          </div>
          <div class="ba-footer__link">
            <span>BA Cómo Llego</span>
            <a href="#"><img src="~img/ba/Android.png" alt="android"></a>
            <a href="#"><img src="~img/ba/IOS.png" alt="ios"></a>
          </div>
          <div class="ba-footer__link">
            <span>BA EcoBici</span>
            <a href="#"><img src="~img/ba/Android.png" alt="android"></a>
            <a href="#"><img src="~img/ba/IOS.png" alt="ios"></a>
          </div>
        </div>
      </div>
      <div class="ba-footer__col">
        <h1 class="ba-footer__title">
          Most visited
        </h1>
        <div class="ba-footer__link"><a href="#">City sightseeing bus</a></div>
        <div class="ba-footer__link"><a href="#">Getting around</a></div>
        <div class="ba-footer__link"><a href="#">Festivals and events</a></div>
        <div class="ba-footer__link"><a href="#">Carnival in the city</a></div>
        <div class="ba-footer__link"><a href="#">Guided tours</a></div>
        <div class="ba-footer__link"><a href="#">What to do this week</a></div>
        <div class="ba-footer__link"><a href="#">Must-see attractions</a></div>
        <div class="ba-footer__link"><a href="#">San Telmo market</a></div>
        <div class="ba-footer__link"><a href="#">Cafe Rosada</a></div>
        <div class="ba-footer__link"><a href="#">Recoleta Cemetary</a></div>
      </div>
      <div class="ba-footer__col">
        <h1 class="ba-footer__title">
          Professionals
        </h1>
        <div class="ba-footer__link"><a href="#">Press resources and contact</a></div>
        <div class="ba-footer__link"><a href="#">Latest City News</a></div>
        <div class="ba-footer__link"><a href="#">International media coverage</a></div>
        <div class="ba-footer__link"><a href="#">Meetings & Events (MICE)</a></div>
        <div class="ba-footer__link"><a href="#">Monthly reports 2018</a></div>
      </div>
      <div class="ba-footer__col">
        <h1 class="ba-footer__title">
          Subscription
          <BASubscription />
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import BASubscription from './BASubscription'
export default {
  components: { BASubscription }
}
</script>

<style lang="scss">
@import "~#/abstracts/mixins";
.ba-footer {
  flex: 1;
  width: 100%;
  &__header {
    background-color: #1c1c1c;
    height: 6rem;
    padding: .5rem 7.5rem;
    img {
      height: 100%;
    }

    @include respond(tab-port) {
      text-align: center;
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;
    background-color: #262424;
    padding: 2rem 4rem 1rem 7.5rem;

    @include respond(tab-port) {
      flex-direction: column;
    }
  }

  &__col {
    flex: 1;
    &:not(:last-child) {
      margin-right: 7rem;
    }
    @include respond(tab-port) {
      max-width: 25rem;
    }
  }

  &__title {
    font-size: 2rem;
    font-weight: 500;
    color: #fff;
    margin-bottom: 1rem;
    &--blue {
      color: #19C3E3;
      &:hover {
        color: #205093;
      }
    }
  }

  &__subtitle {
    font-size: 1.6rem;
    color: #fff;
    font-weight: 400;
  }

  &__social {
    margin-bottom: 2rem;
  }

  &__social-links {
    display: flex;
    padding: 0 .5rem;

      @include respond(tab-port) {
        width: 20rem;
      }

    div {
      flex: 1;
      cursor: pointer;
      transition: transform .2s;

      &:hover {
        transform: scale(1.2);
      }

      &:not(:last-child) {
        margin-right: 1.2rem;
      }
    }

    img {
      width: 100%;
    }
  }

  &__link {
    color: #808080;
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    margin-bottom: 2rem;
    cursor: pointer;
    &:hover {
      color: lighten(#808080, 20%);
    }

    > * {
      margin-right: .8rem;
    }
    a {
      img {
        width: 2.2rem;
      }
    }
  }
}
</style>

