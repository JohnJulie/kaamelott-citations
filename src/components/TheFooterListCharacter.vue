<template>
  <div class="character-list">
    <slick ref="slick" :options="slickOptions">
      <div v-for="character in characters" @click="$emit('setCharacter', character)">
        <img v-if="character.src !== ''" :src="require('../assets/images/characters/' + character.src)" :alt="character.name" />
        <span class="character-name">{{ character.name }}</span>
      </div>
    </slick>
  </div>
</template>

<script>
  import Slick from 'vue-slick';
  import charactersList from '../utils/characters';

  export default {
    name: 'TheFooterListCharacter',
    components: {Slick},
    data () {
      return {
        selectedCharacter: 'Arthur',
        characters: charactersList,
        slickOptions: {
          arrows: false,
          slidesToShow: 5,
          slidesToScroll: 8,
          swipeToSlide: true,
          focusOnSelect: true,
          centerMode: true,
          adaptiveHeight: true,
          // Any other options that can be got from plugin documentation
        },
      }
    }
  }
</script>

<style lang="scss">
  @import '../../node_modules/slick-carousel/slick/slick.css';

  .character-list {
    height: 15vh;
  }

  .slick-slider {
    display: flex;
    .slick-slide {
      .slick-current {
        margin: 0 70px;
      }
      &:not(.slick-current) {
        transform: scale(0.8) translate(0, 15%);
      }
    }
  }

</style>
