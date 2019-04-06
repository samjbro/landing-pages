<template>
  <div class="navbar">
    <router-link 
      to="/"
      class="navbar__link"
    >
      Home
    </router-link>
    <router-link 
      to="/buenos-aires"
      class="navbar__link"
    >
      Buenos Aires
    </router-link>
  </div>
</template>

<style lang="scss">
@import "~#/abstracts/variables";
.navbar {
  background: grey;
  height: $navbar-height;
  line-height: $navbar-height;

  &__link {
    &.router-link-exact-active {
      color: white;
      background: darken(grey, 20%);
    }
  }
}
</style>



