<template>
  <nav class="kaamelott-header">
    <router-link to="/">
      <img src="../assets/images/Kaamelott_Logo.png"/>
    </router-link>
    <div class="kaamelott-header--buttons">
      <router-link to="/personnage" class="kaamelott-header--link">Personnages</router-link>
      <router-link to="/livre" class="kaamelott-header--link">Livres</router-link>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'TheHeader',
    data () {
      return {
        title: 'Kaamelott'
      }
    }
  }
</script>

<style lang="scss">
  .kaamelott-header {
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 20px;
    img {
      -webkit-transform: scale(0.5); /* Saf3.1+, Chrome */
      -moz-transform: scale(0.5); /* FF3.5+ */
      -ms-transform: scale(0.5); /* IE9 */
      -o-transform: scale(0.5); /* Opera 10.5+ */
      transform: scale(0.5) translate(-50%);
    }
  }
  .kaamelott-header--buttons {
    color: #ffffff;
    font-size: x-large;
    .kaamelott-header--link {
      margin-left: 20px;
      color: #ffffff;
      text-decoration: none;
      &:hover {
        color: beige;
      }
    }
  }
</style>
