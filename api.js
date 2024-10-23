// src/api.js
import axios from 'axios';

// API voor video's
const VIDEO_API_URL = 'https://api.jsonbin.io/v3/b/670ccbfaad19ca34f8b81951';

// API voor berichten
const MESSAGE_API_URL = 'mongodb+srv://roekenswesley:Heib6CdV6aQPYuSM@cluster2.blblt.mongodb.net/?retryWrites=true&w=majority&appName=mongodbles'; // Vervang met jouw API

// Haal video's op
export const getVideos = () => {
  return axios.get(VIDEO_API_URL);
};

// Haal berichten op
export const getMessages = () => {
  return axios.get(MESSAGE_API_URL);
};

// Plaats een nieuw bericht
export const postMessage = (username, text) => {
  return axios.post(MESSAGE_API_URL, { username, text });
};
