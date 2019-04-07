<template>
  <div class="ba-navigation" ref="navEl">
    <div class="ba-navigation__row">
      <a href="#" class="ba-navigation__logo">
        <img src="~img/ba/bac-footer.svg" alt="BA Logo">
      </a>
      <div class="ba-navigation__search">
        <input type="text" placeholder="Buscar">
        <fa-icon :icon="['fas', 'search']" />
      </div>
    </div>
    <div class="ba-navigation__row ba-navigation__row--reversible">
      <div class="ba-navigation__menu">
        <div class="ba-navigation__menu-button" @click="toggleMenu">
          Main menu
          <fa-icon :icon="['fas', 'angle-down']" />
        </div>
        <BAMenu ref="menuEl" />
      </div>
      <div class="ba-navigation__display">
        <div class="ba-navigation__info ba-navigation__info--measurement">
          Temp. {{ temperature || '-' }}°
        </div>        
        <div class="ba-navigation__info ba-navigation__info--measurement">
          Hum. {{ humidity || '-' }}%  
        </div>    
        <div class="ba-navigation__info" v-if="weatherData">
          <img :src="weather.icon" :alt="weather.description">
        </div>
        <div class="ba-navigation__info ba-navigation__info--select">
          <form>
            <select name="lang" id="lang">
              <option value="eng">English</option>
              <option value="por">Portugês</option>
              <option value="esp">Español</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import BAMenu from './BAMenu'
export default {
  components: { BAMenu },
  data () {
    return {
      menuExpanded: false,
      weatherData: null
    }
  },
  computed: {
    temperature () {
      if (!this.weatherData) return '-'
      const temp = this.weatherData.data.main.temp
      return temp.toString().replace('.', ',')
    },
    humidity () {
      if (!this.weatherData) return '-'
      const humidity = this.weatherData.data.main.humidity
      return humidity.toString().replace('.', ',')
    },
    weather () {
      const weather = this.weatherData.data.weather[0]

      // No icon for mist, so use cloud instead
      if (weather.icon.slice(0, 2) === '50') weather.icon = '03' + weather.icon.slice(-1)
      return {
        icon: require(`img/ba/weather/${weather.icon}.svg`),
        alt: weather.description
      }
    }
  },
  mounted () {
    this.getCurrentWeather()
  },
  methods: {
    async getCurrentWeather () {
      this.weatherData = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=Buenos Aires&units=metric&id=524901&APPID=bcebb95329f7ace43020439afcb4e214')
    },
    toggleMenu () {
      // Close any submenus.
      this.$refs.menuEl.setActive(null)
      if (this.menuExpanded) this.$refs.menuEl.$el.style.display = 'flex'
      // Make sure the nav element's maxHeight is a pixel value, or else the transition won't work.
      this.setNavHeight()
      // Set the menu to expanded.
      this.menuExpanded = !this.menuExpanded
      // Adjust the height of the nav element. This is inside a timeout so that the browser re-renders maxHeight as a pixel value before adjusting.
      if (this.menuExpanded) this.$refs.menuEl.$el.style.display = 'flex'
      setTimeout(() => {
        this.setNavHeight()
      },1)

      setTimeout(() => {
      // Reset the nav element's maxHeight so the overall height will adjust (without a transition effect) when submenus expand.
        // if (this.menuExpanded) this.$refs.navEl.style.maxHeight = 'initial'
        if (this.menuExpanded) this.$refs.navEl.style.height = 'auto'
      // This needs to happen after the transition has completed or it'll cancel the effect, so the timeout needs to be the same length as the transition effect in the SCSS below.
      }, 301)

    },
    setNavHeight () {
      // this.$refs.navEl.style.maxHeight = this.menuExpanded
      this.$refs.navEl.style.height = this.menuExpanded
      // This must be the same as the expanded menu's height.
        ? '69rem'
      // This should be the same as the $ba-header-height-mobile SASS variable.
        : '35rem' 

      // Below is an attempt to calculate the necessary height on the fly, but scroll/client height don't work reliably on mobile browsers. Shame.
      // this.$refs.navEl.style.maxHeight = this.menuExpanded
      // ? this.$refs.navEl.scrollHeight + 'px'
      // : this.$refs.navEl.clientHeight - this.$refs.menuEl.$el.clientHeight + 'px'
    }
  }
}
</script>

<style lang="scss">
@import "~#/abstracts/mixins";
@import "~#/abstracts/variables";
.ba-navigation {
  position: absolute;
  width: 100%;
  background-color: $ba-bg-tint;
  padding-top: 2.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  // transition: max-height .4s;
  transition: height .4s;
  z-index: 999;
  @include respond(phone) {
    overflow: hidden;
    height: $ba-header-height-mobile;
  }

  &::before {
    content: "";
    position: absolute;
    height: .9rem;
    width: 100%;
    top: 0;
    background-color: $color-ba-orange-1;
  }

  @include respond(tab-port) {
    position: relative;
    padding-top: 4.8rem;
    &::before {
      top: 2.5rem;
    }
    background: linear-gradient($ba-bg-tint, $ba-bg-tint), url(~img/ba/headerbg.jpg);
    background-size: cover;
    background-position-x: 50%;
  }

  &__row {
    display: flex;
    width: $ba-content-width-large;
    align-items: center;
    justify-content: space-between;

    &:not(:last-child) {
      margin-bottom: .5rem;
    }

    @include respond(tab-land) {
      width: $ba-content-width-medium;
      &--reversible {
        flex-direction: row-reverse;
      }
    }
    @include respond(tab-port) {
      width: 100%;
      flex-direction: column;
      &--reversible {
        flex-direction: column-reverse;
      }
      &:not(:last-child) {
        padding-bottom: 0;
      }
      & > * {
        padding-bottom: 2rem;
      }
    }
  }

  &__search {
    position: relative;
    color: #a8a8a8;

    input {
      color: #555;
      &::placeholder {
        color: #a8a8a8;
      }
      width: 37rem;
      padding: 1rem 1.2rem;
      font-size: 1.4rem;
      outline: none;
      border-radius: .3rem;
      border: 1px solid $color-ba-orange-1;

      @include respond(tab-land) {
        width: 34rem;
      }

      @include respond(tab-port) {
        width: 60rem;
      }
      @include respond(phone) {
        width: 95vw;
      }
    }  

    svg {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 1rem;
    }
  }
  &__display {
    display: flex;
    align-items: center;

    font-size: 1.5rem;
    
    @include respond(tab-land) {
      padding-right: 0;
      padding-left: .5rem;
      font-size: 1.3rem;
    }
    
    @include respond(tab-port) {
      width: 100%;
      padding-top: 2.5rem;
      font-size: 1.8rem;
      justify-content: flex-start;
      margin-left: 25rem;
    }
    
    @include respond(phone) {
      padding-left: 3rem;
      margin-left: 0;
    }
  }
  &__info {
    &:not(:last-child) {
      padding-right: 1rem;
    }

    &--measurement {
      background-color: #000;
      border-radius: 2rem;
      padding: .2rem 1rem;
    }

    &--select {
      form {
        select {
          background: none;
          color: inherit;
          border: none;
          font-size: 1.3rem;
          padding: .4rem .9rem;
        }
      }
    }

    img {
      margin-left: 1rem;
      width: 3.5rem;
    }
  }

  &__menu {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @include respond(phone) {
      align-items: initial;
      width: 100%;
      padding: 0 2rem;
    }
  }

  &__menu-button {
    display: none;
    background-color: $color-ba-orange-2;
    border: none;
    padding-bottom: 1.2rem;
    padding: 1.5rem 0;
    border-radius: .4rem;
    font-weight: bold;
    font-size: 2.2rem;
    color: #333;
    flex-grow: 2;
    margin-bottom: 2rem;

    &:hover {
      color: #685822;
      background-color: $color-ba-orange-1;
    }

    svg {
      font-size: 3rem;
      margin-left: 1rem;
    }

    @include respond(phone) {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
