<!-- src/components/Videos.vue -->
<template>
  <div>
    <h1>Video Feed</h1>
    <div v-for="video in videos" :key="video.video" class="video-container">
      <video :src="video.video" controls></video>
      <p><strong>{{ video.username }}</strong>: {{ video.description }}</p>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue';
import { getVideos } from '../api';

export default {
  setup() {
    const videos = reactive([]);

    // Haal video's op bij het laden van de component
    onMounted(async () => {
      try {
        const response = await getVideos();
        videos.push(...response.data.record.data.videos);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    });

    return {
      videos,
    };
  },
};
</script>

<style scoped>
.video-container {
  margin-bottom: 20px;
}
video {
  width: 100%;
  max-width: 600px;
  margin-bottom: 10px;
}
</style>
