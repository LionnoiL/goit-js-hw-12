import axios from 'axios';

export const getImagesByQuery = async (query, page) => {
  const res = await axios.get('https://pixabay.com/api/', {
    params: {
      key: import.meta.env.VITE_PIXABAY_KEY,
      q: query,
      per_page: 15,
      page: page,
      safesearch: true,
      orientation: 'horizontal',
      image_type: 'photo',
    },
  });

  return res.data;
};
