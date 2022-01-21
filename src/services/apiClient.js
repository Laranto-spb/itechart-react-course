import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com';

function initApiClient() {
  return {
    cards: {
      get: (id) => axios.get(`${baseUrl}/posts/${id}`),
      getAll: () => axios.get(`${baseUrl}/posts`),
      create: (card) => axios.post(`${baseUrl}/posts`, card),
    },
  };
}

// eslint-disable-next-line import/prefer-default-export
export const cardApi = initApiClient();
