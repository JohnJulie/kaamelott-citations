import Vue from 'vue';

export default {
  getRandomQuote() {
    console.log('on getRandomQuote');
    return Vue.axios.get('https://kaamelott.chaudie.re/api/random')
    .then(response => {
      return response.data.citation;
    })
    .catch((error) => {
      console.log('error on getRandomQuote:', error);
    });
  }
}
