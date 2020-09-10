<template>
  <div class="netflix">
    <h2>Movies</h2>
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :key="id" v-for="(banner, backdrop_path, id) in newReleased">
          <h3>{{ banner.title }}</h3>
          <img :src="getImage(banner.backdrop_path)" />
          <router-link :to="{ name: 'Watch', params: { id: banner.id }}"></router-link>
        </div>
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import movies from "@/services/movies";

export default {
  name: "Movie",
  data: () => ({
    movies: [],
    newReleased: [],
    swiperOption: {
      loop: true,
      slidesPerView: 6,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
      // Some Swiper option/callback...
    }
  }),
  methods: {
    getImage(file) {
      return "/images/backdrop/w780" + file;
    }
  },
  async created() {
    this.movies = await movies.getMovies();
    this.newReleased = this.movies
      .sort(function(a, b) {
        return b.release_year - a.release_year;
      })
      .slice(0, 25);
  }
};
</script>

<style lang="scss">
.netflix {
  img {
    width: 100%;
    height: auto;
  }

  .swiper-container {
    overflow: inherit;
  }

  .slider-wrapper {
    padding: 20px 0;
  }

  .swiper-slide {
    transition: 250ms all;

    h3 {
      display: inline-block;
      position: absolute;
      color: #fff;
      bottom: 0;
      margin: 0;
      padding-bottom: 20px;
      width: 100%;
      // background: rgba(0, 0, 0, 0.4);
      z-index: 2;
    }

    a {
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      z-index: 2;
    }

    &:hover {
      transform: scale(1.2);
      z-index: 1;
    }

    img {
      transition: 250ms all;
    }
  }
}
</style>