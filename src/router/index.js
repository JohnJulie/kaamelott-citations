import Vue from 'vue';
import Router from 'vue-router';

import AllQuote from '../views/AllQuote';
import CharacterQuote from '../views/CharacterQuote';
import BookQuote from '../views/BookQuote';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AllQuote',
      component: AllQuote,
    },
    {
      path: '/personnage',
      name: 'CharacterQuote',
      component: CharacterQuote,
    },
    {
      path: '/livre',
      name: 'BookQuote',
      component: BookQuote,
    }
  ]
});
