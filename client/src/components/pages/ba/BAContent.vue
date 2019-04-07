<template>
  <div class="ba-content">
    <div class="ba-content__main">
      <div class="ba-content__row">
        <div class="ba-content__panel-group">

          <div class="ba-content__panel-wrapper ba-content__panel-wrapper--horizontal">
            <div class="ba-content__panel ba-content__panel--img">
              <img src="~img/ba/mura_pibes_laboca_1200_1.jpg" alt="mura">
            </div>
            <div class="ba-content__panel ba-content__panel--info ba-content__panel--left ba-content__panel--red">
              <div>
                <h1>Guided tours</h1>
                <div>We have a range of guided tours available in English and Spanish.</div>
              </div>
            </div>
          </div>

          <div class="ba-content__panel-wrapper ba-content__panel-wrapper--horizontal ba-content__panel-wrapper--reversed">
            <div class="ba-content__panel ba-content__panel--img">
              <img src="~img/ba/cck1200.jpg" alt="house">
            </div>
            <div class="ba-content__panel ba-content__panel--info ba-content__panel--right ba-content__panel--sea-green">
              <div>
                <h1>What's on in Buenos Aires</h1>
                <div>Highlights in Buenos Aires for April 1 to 8.</div>
              </div>
          </div>
          </div>

        </div>
        <div class="ba-content__panel-wrapper ba-content__panel-wrapper--vertical-reversed">
          <div class="ba-content__panel ba-content__panel--img">
            <img src="~img/ba/viista_bus_1200.jpg" alt="bus">
          </div>            
          <div class="ba-content__panel ba-content__panel--info ba-content__panel--down ba-content__panel--orange">
            <div>
              <h1>BA.Tours, our online store for tourism experiences</h1>
              <div>Whatever you're looking for, you'll find plenty of activities to enjoy in Buenos Aires and you can book and pay online!</div>
            </div>
          </div>

        </div>
        <div class="ba-content__panel-wrapper ba-content__panel-wrapper--vertical">
          <div class="ba-content__panel ba-content__panel--img">
            <img src="~img/ba/asado_1200_3_0.jpg" alt="asado">
          </div>
          <div class="ba-content__panel ba-content__panel--info ba-content__panel--up ba-content__panel--yellow">
            <div>
              <h1>What, where and when to eat</h1>
              <div>What, where and when to eat, food tours and dining tips.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="ba-content__row">
        <div class="ba-content__panel-wrapper ba-content__panel-wrapper--vertical">
          <div class="ba-content__panel ba-content__panel--img">
            <img src="~img/ba/planetario_dia_1200.jpg" alt="planetario">
          </div>
          <div class="ba-content__panel ba-content__panel--info ba-content__panel--up ba-content__panel--pink">
            <div>
              <h1>Total Solar Eclipse</h1>
                <div>On Tuesday July 2, experience the world's greatest astronomical spectacle in Buenos Aires.</div>
            </div>
          </div>
        </div>
        <div class="ba-content__panel-group">
          <div class="ba-content__panel-wrapper ba-content__panel-wrapper--horizontal">
            <div class="ba-content__panel ba-content__panel--img">
              <img src="~img/ba/floralis980_1.jpg" alt="house">
            </div>
            <div class="ba-content__panel ba-content__panel--info ba-content__panel--left ba-content__panel--blue">
              <div>
                <h1>Must-see attractions</h1>
                <div>If you're only in town for a short time, these are the places not to miss on your visit.</div>
              </div>
            </div>
          </div>
          <div class="ba-content__panel-group ba-content__panel-group--singles">
            <div class="ba-content__panel-wrapper">
              <div class="ba-content__panel ba-content__panel--info ba-content__panel--grass-green">
                <div>
                  <h1>Accessible tourism</h1>
                  <div>Take a look at our accessible tourism guide, maps, bike tours and download the app.</div>
                </div>
              </div>
            </div>
            <div class="ba-content__panel-wrapper">
              <div class="ba-content__panel ba-content__panel--info ba-content__panel--black">
                <div>
                  <h1>Pay no VAT on accommodation in Buenos Aires!</h1>
                  <div>Your visit to the city just got cheaper. Save 21% with an automatic VAT refund.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ba-content__panel-wrapper ba-content__panel-wrapper--vertical">
          <div class="ba-content__panel ba-content__panel--img">
            <img src="~img/ba/profesionales1200_1.jpg" alt="planetario">
          </div>
          <div class="ba-content__panel ba-content__panel--info ba-content__panel--up ba-content__panel--grey">
            <div>
              <h1>Professionals</h1>
              <div>News, press contacts, media coverage and MICE tourism.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ba-content__footer">
      <img src="~img/ba/footer.png" alt="footer">
    </div>
  </div>
</template>

<style lang="scss">
@import "~#/abstracts/mixins";
@import "~#/abstracts/variables";
.ba-content {
  width: $ba-content-width-large;
  @include respond(tab-land) {
    width: $ba-content-width-medium;
  }
  @include respond(phone) {
    width: 100%;
  }
  &__main {
    margin: 1.5rem 0;

    @include respond(tab-port) {
      margin: 1rem 0;
    }
  }

  &__row {
    display: flex;

    @include respond(tab-port) {
      flex-direction: column;
    }
  }

  &__panel-group {
    display: flex;
    flex-direction: column;
    flex: 2;

    &--singles {
      flex-direction: row;

      @include respond(tab-port) {
        flex-direction: column;
      }
    }
  }

  &__panel-wrapper {
    display: flex;
    flex: 1;
    cursor: pointer;
    margin-right: 1rem;
    margin-bottom: 1rem;
    color: #fff;

    &:hover {
      color: #eaeaea;
    }

    &--reversed {
      flex-direction: row-reverse;
    }

    &--vertical {
      flex-direction: column;
    }

    &--vertical-reversed {
      flex-direction: column-reverse;
    }

    @include respond(tab-port) {
      flex-direction: column;
      margin-bottom: 2.6rem;
      align-items: center;
    }

    @include respond(phone) {
      margin: 0 2rem;
    }
  }

  &__panel {
    flex: 1;
    position: relative;

    @include respond(tab-port) {
      width: 90rem;
      max-width: 100%;
    }

    &--info {
      padding-bottom: 4rem;
      & > * {
        padding: 1.4rem 1.6rem;
      }
      h1 {
        font-size: 2.4rem;
        margin-bottom: .7rem;
      }

      div {
        font-size: 1.8rem;
      }

      @include respond(tab-port) {
        padding-bottom: 1.6rem;
        h1 {
          font-size: 3.2rem;
        }
      }
    }

    &::before {
      content: "";
      position: absolute;
      background: inherit;
      z-index: 1;

      @include respond(tab-port) {
        content: none;
      }
    }
    &--left {
      &::before {
        top: 50%;
        left: -2.4rem;
        height: 5rem;
        width: 2.5rem;
        transform: translateY(-50%);
        clip-path: polygon(100% 0, 0% 50%, 100% 100%);
      }
    }
    &--right {
      &::before {
        top: 50%;
        left: 100%;
        height: 5rem;
        width: 2.5rem;
        transform: translateY(-50%);
        clip-path: polygon(0 0, 100% 50%, 0 100%);
      }
    }
    &--down {
      &::before {
        top: 99%;
        left: 50%;
        height: 2.6rem;
        width: 5.1rem;
        transform: translateX(-50%);
        clip-path: polygon(0 0, 50% 100%, 100% 0);
      }
    }
    &--up {
      &::before {
        top: -2.4rem;
        left: 50%;
        height: 2.5rem;
        width: 5rem;
        transform: translateX(-50%);
        clip-path: polygon(0 100%, 50% 0, 100% 100%);
      }
    }

    &--img {
      flex: 1;
      img {
        height: 100%;
        width: 100%;

        @include respond(tab-port) {
          height: 30rem;

          object-fit: cover;
          transform: translateY(2px);
        }
      }
    }

    &--red {
      background-color: #C84032;
    }
    &--orange {
      background-color: #F68D28;
    }
    &--yellow {
      background-color: #FEC90B;
    }
    &--sea-green {
      background-color: #38AAA6;
    }
    &--pink {
      background-color: #BF4C7E;
    }
    &--grass-green {
      background-color: #6DA040;
    }
    &--blue {
      background-color: #4466B0;
    }
    &--black {
      background-color: #1E1D22;
    }
    &--grey {
      background-color: #888;
    }
  }

  &__footer {
    margin-bottom: -3px;

    img {
      width: 100%;
    }
  }  
}
</style>
