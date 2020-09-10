<template>
  <div class="home">
    <Movie />
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Movie from '@/components/Movie.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Movie
  }
}
</script>
