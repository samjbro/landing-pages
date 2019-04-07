<template>
  <div class="ba-menu">
    <div 
      class="ba-menu__item" 
      :class="{'ba-menu__item--active': active === 'discover'}"
    >
      <div href="#" class="ba-menu__link"
       @click="setActive('discover')"
      >
        Discover
        <fa-icon :icon="['fas', 'caret-down']" />
      </div>
      <ul class="ba-menu__dropdown">
        <li><span>The city's people</span></li>
        <li><span>10 reasons to visit</span></li>
        <li><span>Must-see attractions</span></li>
        <li><span>First time in the city?</span></li>
        <li><span>Buenos Aires up close</span></li>
      </ul>
    </div>
    <div
      class="ba-menu__item"
      :class="{'ba-menu__item--active': active === 'what-to-do'}"
    >
      <div href="#" class="ba-menu__link"
        @click="setActive('what-to-do')"
      >
        What to do
        <fa-icon :icon="['fas', 'caret-down']" />
      </div>
      <ul class="ba-menu__dropdown">
        <li><span>Guided tours</span></li>
        <li><span>Itineraries</span></li>
        <li><span>Art, culture and tango</span></li>
        <li><span>Food, drink and nightlife</span></li>
        <li><span>Football, sport and parks</span></li>
        <li><span>Festivals and events</span></li>
      </ul>
    </div>
    <div 
      class="ba-menu__item"
      :class="{'ba-menu__item--active': active === 'info'}"
    >
      <div href="#" class="ba-menu__link"
        @click="setActive('info')"
      >
        Practical information
        <fa-icon :icon="['fas', 'caret-down']" />
      </div>
      <ul class="ba-menu__dropdown">
        <li><span>Getting to Buenos Aires</span></li>
        <li><span>Getting around</span></li>
        <li><span>When and where to stay</span></li>
        <li><span>Useful information</span></li>
      </ul>
    </div>
    <div class="ba-menu__item">
      <a href="#" class="ba-menu__link">
        Plan
      </a>
    </div>
    <div class="ba-menu__item">
      <a href="#" class="ba-menu__link">
        Book
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: null
    }
  },
  methods: {
    setActive(item) {
      this.active = this.active === item
        ? null
        : item
    }
  }
}
</script>

<style lang="scss">
@import "~#/abstracts/mixins";
@import "~#/abstracts/variables";
.ba-menu {
  $ba-menu: &;
  padding: 3rem .5rem 0 .5rem;

  font-size: 1.6rem;
  display: flex;

  @include respond(tab-land) {
    font-size: 1.8rem;
  }

  @include respond(phone) {
    padding-bottom: 1rem;
    font-size: 2.2rem;
    flex-direction: column;
    // position: absolute;
    // top: 60rem;
  }

  &__item {
    display: flex;
    flex-direction: column;
    display: inline-block;
    cursor: pointer;
    position: relative;

    margin-right: .5rem;

    &:hover {
        #{$ba-menu}__link {  
          color: #000;
          background-color: $color-ba-orange-2;

          svg {
            color: #2A6496;
          }
        }
        #{$ba-menu}__dropdown {
          display: flex;
        }
    }

    @include respond(phone) {
      &:hover {
        #{$ba-menu}__link {
          background-color: initial;
          color: inherit;
        }
        #{$ba-menu}__dropdown {
          display: none;
        }
      }
      &--active {
        color: #000;

        &, &:hover {
          #{$ba-menu}__dropdown {
            display: flex;
          }
          #{$ba-menu}__link {
            background-color: $color-ba-orange-2;
          }
        }


        #{$ba-menu}__link {  
          svg {
            color: #2A6496;
          }
        }
      }
    }
  }

  &__link {
    display: block;
    padding: 1.6rem 2.2rem;
    border-radius: .5rem .5rem 0 0;
    background: rgba(0,0,0,.3);
    @include respond(phone) {
      padding: 1.6rem 4.2rem;
    }
    width: 100%;
    svg {
      margin-left: .5rem;
      font-size: 1.5rem;
      color: $color-ba-orange-1;
      transform: translateY(-2px);
    }
  }

  &__dropdown {
    position: absolute;
    display: none;
    list-style: none;
    flex-direction: column;
    background-color: #fff;
    border-radius: 0 0 .5rem .5rem;
    color: #666;
    padding: 1rem 1.2rem;
    top: 100%;
    left: 0;
    z-index: 1;
    width: 30rem;

    @include respond(phone) {
      width: 100%;
      position: relative;
    }

    li {
      padding: 1.3rem 2rem;
      border-bottom: 1px dotted #dfdfdf;

      &:hover {
        background: rgba($color-ba-orange-2, .5);
        color: #bbb;
      }

      @include respond(phone) {
        padding-left: 4rem;
        padding-right: 4rem;
      }
      
    }
  }
}
</style>
