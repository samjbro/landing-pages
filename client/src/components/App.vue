<template>
  <div class="app">
    <div class="app__main">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
html {
  background-color: #000;
}
.app {
  background-color: #fff;
  display: flex;
  height: 100%;

  &__main {
    flex: 1;
  }
}
</style>
