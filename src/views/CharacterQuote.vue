<template>
  <div>
    <the-random-quote :quote="quote"></the-random-quote>
    <the-footer-list-character @setCharacter="setCharacter"></the-footer-list-character>
  </div>
</template>

<script>
  import charactersList from '../utils/characters';
  import randomQuoteService from '../api/randomQuoteService';
  import TheRandomQuote from '../components/TheRandomQuote';
  import TheFooterListCharacter from "../components/TheFooterListCharacter";

  export default {
    name: 'CharacterQuotes',
    components: {TheRandomQuote, TheFooterListCharacter},
    data () {
      console.log('charactersList:', charactersList);
      return {
        selectedCharacter: 'Arthur',
        characters: charactersList,
        quote: {
          text: '',
          details: ''
        }
      }
    },
    methods: {
      setCharacter: function (character) {
        console.log("selected character:", character.id);
        randomQuoteService.getCharacterQuote(character.name).then(
          quote => {
            this.quote.text = quote.citation;
            this.quote.details = quote.infos;
          }
        );
      }
    }
  }
</script>
