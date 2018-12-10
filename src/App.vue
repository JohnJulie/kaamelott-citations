<template>
  <div id="app">
    <the-header></the-header>
    <!-- Route Outlet -->
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader";

export default {
  name: 'app',
  components: {TheHeader},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
  html, body, #app {
    height: 100vh;
    margin: 0;
    background-color: #000000;
    color: #ffffff;
    font-family: Papyrus;
  }
  .main-page {
    height: calc(100vh - 100px);
  }
</style>
