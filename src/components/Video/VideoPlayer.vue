<script setup>
const props = defineProps({
  videosrc:String,
});

</script>

<template>
  <div class="player">
     <video loop autoplay muted :src="videosrc"></video>
     <div class="player__controls">
      <a href="#" @click.prevent="$emit('prevVideo')">⬆️</a>
      <a href="#" @click.prevent="$emit('nextVideo')">⬇️</a>
     </div>
  </div>
 
</template>

<style scoped>
  .player{
    background-image: url('/foto.png');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .player__controls{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
  
</style>
