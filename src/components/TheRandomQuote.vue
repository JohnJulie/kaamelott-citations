<template>
  <div class="random-quote">
    <div class="quote">
      "{{ quote.text }}"
    </div>
    <div class="quote-details">
      {{ formattedInfos }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TheRandomQuote',
    props: ['quote'],
    computed: {
      formattedInfos: function () {
        const infos = this.quote.details;
        return 'De ' + infos.personnage + ', ' + infos.saison + ', Episode ' + infos.episode;
      }
    }
  }
</script>

<style lang="scss">
  .random-quote {
    height: 70vh;
    margin: 0 15%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .quote {
      font-size: 2em;
    }

    .quote-details {
      font-size: 1.4em;
    }
  }
</style>
