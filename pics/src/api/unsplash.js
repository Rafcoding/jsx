import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 80f9d1fb65a5b0134204678a73ecce86c02e284a97207bd78d575915ffe7f7cb'
  }
});
