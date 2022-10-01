import axios from 'axios';

const APIKEY = '27833874-1888522c36b844d581276598f';
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: APIKEY,
  orientation: 'horizontal',
  image_type: 'photo',
  per_page: 12,
};

export const fetchImages = async (name, page) => {
  const { data } = await axios.get(`?q=${name}&page=${page}`);
  return data;
};

export default fetchImages;
