import axios from 'axios';

const API_KEY = '32819463-089d108b74804e81dbda92dfd';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImages(query, page) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}
