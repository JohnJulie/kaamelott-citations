import Vue from 'vue';
import Router from 'vue-router';

import AllQuotes from '../views/AllQuotes';
import CharacterQuotes from '../views/CharacterQuotes';
import BookQuotes from '../views/BookQuotes';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AllQuotes',
      component: AllQuotes,
    },
    {
      path: '/personnage',
      name: 'CharacterQuotes',
      component: CharacterQuotes,
    },
    {
      path: '/livre',
      name: 'BookQuotes',
      component: BookQuotes,
    }
  ]
});
