import axios from "axios";
import config from "./config";

export const getImages = (amount) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://api.unsplash.com/photos/random?client_id=${config.access_key}&count=${amount}`
      )
      .then((response) => {
        const { data } = response;
        const images = data.map(({ id, alt_description, urls }) => ({
          id,
          alt: alt_description,
          url: urls.thumb,
        }));

        resolve(images);
      })
      .catch((e) => reject(e));
  });
};
