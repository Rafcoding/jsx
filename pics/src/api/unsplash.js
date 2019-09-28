import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 80f9d1fb65a5b0134204678a73ecce86c02e284a97207bd78d575915ffe7f7cb'
  }
});

// "https://s3-eu-west-1.amazonaws.com/stylr-ai-engine-srv-data/srv/data/archive/zalando-women-07-10-2017/garment_items.jl"
