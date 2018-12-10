<template>
  <the-random-quote :quote="quote"></the-random-quote>
</template>

<script>
  import TheRandomQuote from "../components/TheRandomQuote";
  import randomQuoteService from '../api/randomQuoteService';

  export default {
    name: 'AllQuote',
    components: {TheRandomQuote},
    data () {
      return {
        quote: {
          text: '',
          details: ''
        }
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
