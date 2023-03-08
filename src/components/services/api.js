import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const addMaterial = async values => {
  const response = await axios.post(
    '?q=cat&page=1&key=32819463-089d108b74804e81dbda92dfd&image_type=photo&orientation=horizontal&per_page=12',
    values
  );
  return response.data;
};
