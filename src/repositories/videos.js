import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(videoObject) {
  return fetch(URL_VIDEOS, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(videoObject),
  }) /* Return a promisse */
    .then(async (serverReponse) => {
      if (serverReponse.ok) {
        const response = await serverReponse.json();

        return response;
      }
      throw new Error('Could not reach data!');
    });
}

export default {
  create,
};
