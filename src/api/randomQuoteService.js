import Vue from 'vue';

export default {
  getRandomQuote() {
    return Vue.axios.get('https://kaamelott.chaudie.re/api/random')
    .then(response => {
      return response.data.citation;
    })
    .catch((error) => {
      console.log('error on getRandomQuote:', error);
    });
  },

  getCharacterQuote(character) {
    return Vue.axios.get('https://kaamelott.chaudie.re/api/random/personnage/' + character)
      .then(response => {
        return response.data.citation;
      })
      .catch((error) => {
        console.log('error on getCharacterQuote:', error);
      });
  }
}
