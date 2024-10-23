<!-- src/components/Chat.vue -->
<template>
  <div>
    <h2>Comments</h2>
    <form @submit.prevent="submitComment">
      <input v-model="newUsername" placeholder="Username" required />
      <input v-model="newText" placeholder="Comment" required />
      <button type="submit">Submit</button>
    </form>

    <div class="comments-list">
      <div v-for="comment in comments" :key="comment._id" class="comment">
        <p><strong>{{ comment.username }}</strong>: {{ comment.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue';
import { getMessages, postMessage } from '../api';

export default {
  setup() {
    // Reactieve array voor comments
    const comments = reactive([]);
    const newUsername = reactive('');
    const newText = reactive('');

    // Haal berichten op bij het laden van de component
    onMounted(async () => {
      try {
        const response = await getMessages();
        comments.push(...response.data); // Voeg alle berichten toe aan de comments array
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    });

    // Functie om een nieuw bericht te versturen
    const submitComment = async () => {
      if (!newUsername || !newText) return;
      try {
        const response = await postMessage(newUsername, newText);
        comments.unshift(response.data); // Voeg het nieuwe bericht bovenaan toe
        newUsername.value = '';
        newText.value = '';
      } catch (error) {
        console.error('Error posting message:', error);
      }
    };

    return {
      comments,
      newUsername,
      newText,
      submitComment,
    };
  },
};
</script>

<style scoped>
.comments-list {
  margin-top: 20px;
}
.comment {
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
</style>
