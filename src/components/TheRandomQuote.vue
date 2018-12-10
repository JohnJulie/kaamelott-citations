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
  import randomQuoteService from '../api/randomQuoteService';

  export default {
    name: 'TheRandomQuote',
    props: ['quote'],
    computed: {
      formattedInfos: function () {
        const infos = this.quote.details;
        return 'De ' + infos.personnage + ', ' + infos.saison + ', Episode ' + infos.episode;
      }
    },
    mounted () {
      randomQuoteService.getRandomQuote().then(
        quote => {
          this.quote.text = quote.citation;
          this.quote.details = quote.infos;
        }
      )
    }
  }
</script>

<style lang="scss">
  .random-quote {
    height: calc(80vh - 100px);
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
