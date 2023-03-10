import axios from 'axios';

export async function getApi(value, page) {
  const BASE_URL = 'https://pixabay.com/api';
  const TOKEN = '32924526-f9591cfa3face167d801f2034';
  try {
    const response = await axios.get(
      `${BASE_URL}/?q=${value}&page=${page}&key=${TOKEN}&image_type=photo&orientation=horizontal&per_page=12`
    );
      return response.data;
  } catch (error) {
    alert(`${error.message}`)
    throw new Error(error.message);
  }
}
