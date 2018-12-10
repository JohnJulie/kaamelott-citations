<template>
  <div class="main-page">
    <the-random-quote :quote="quote"></the-random-quote>
    <the-footer-list-book @setBook="setBook"></the-footer-list-book>
  </div>
</template>

<script>
  import TheRandomQuote from "../components/TheRandomQuote";
  import randomQuoteService from '../api/randomQuoteService';
  import TheFooterListBook from "../components/TheFooterListBook";

  export default {
    name: 'BooksQuotes',
    components: {TheFooterListBook, TheRandomQuote},
    data () {
      return {
        quote: {
          text: '',
          details: ''
        }
      }
    },
    methods: {
      setBook: function (book) {
        randomQuoteService.getBookQuote(book).then(
          quote => {
            this.quote.text = quote.citation;
            this.quote.details = quote.infos;
          }
        );
      }
    },
    mounted () {
      this.setBook(1);
    }
  }
</script>
