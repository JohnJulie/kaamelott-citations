<template>
  <div class="random-quote">
    <div class="quote">
      "{{ quote.text }}"
    </div>
    <div class="quote-details">
      {{ quote.details }}
    </div>
  </div>
</template>

<script>
  import randomQuoteService from '../api/randomQuoteService';

  export default {
    name: 'TheRandomQuote',
    data () {
      return {
        quote: {
          text: '',
          details: 'Je teste le detail de la quote'
        }
      }
    },
    mounted () {
      randomQuoteService.getRandomQuote().then(
        quote => {
          this.quote.text = quote.citation;
          console.log('data:', quote)
        }
      )
    }
  }
</script>

<style lang="scss">
  .random-quote {
    height: 80vh;
    margin: 0 15%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .quote {
      font-size: 3em;
    }

    .quote-details {
      font-size: 1.4em;
    }
  }
</style>
