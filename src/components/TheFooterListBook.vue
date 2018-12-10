<template>
  <div class="book-list">
    <div v-for="numberBook in 6">
      <button @click="$emit('setBook', numberBook)">Livre {{numberBook}}</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TheFooterListBook',
    data () {
      return {}
    }
  }
</script>

<style lang="scss">
  .book-list {
    height: 15vh;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;

    button {
      font-family: Papyrus;
      font-size: x-large;
      padding: 10px 20px;
      border-radius: 5px;
    }
  }
</style>
