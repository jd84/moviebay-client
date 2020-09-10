<template>
  <video id="player" src="http://localhost:3000/stream/1" controls autoplay></video>
</template>

<script>
export default {
  name: "Player",
  async created() {
    console.log(this.$route.params.id);
  }
};
</script>