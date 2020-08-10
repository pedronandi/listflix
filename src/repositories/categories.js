import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`) /* Return a promisse */
    .then(async (serverReponse) => {
      if (serverReponse.ok) {
        const response = await serverReponse.json();

        return response;
      }
      throw new Error('Could not reach data!');
    });
}

function getAll() {
  return fetch(URL_CATEGORIES)
    .then(async (serverReponse) => {
      if (serverReponse.ok) {
        const response = await serverReponse.json();

        return response;
      }
      throw new Error('Could not reach data!');
    });
}

export default {
  getAllWithVideos,
  getAll,
};
