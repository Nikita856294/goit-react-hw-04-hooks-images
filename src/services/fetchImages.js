import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const fetchImages = async (searchQuery, per_page = 12) => {
  const response = await axios.get(
    `/?q=${searchQuery}&page=1&key=26309158-f3236db3167f6dd7d3e5fcd77&image_type=photo&orientation=horizontal&per_page=${per_page}`
  );
  console.log(`per_page:${per_page}`, response.data);
  return response.data.hits;
};

export { fetchImages };
