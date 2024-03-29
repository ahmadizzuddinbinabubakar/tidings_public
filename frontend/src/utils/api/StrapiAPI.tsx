import axios from 'axios';

const API_URL = 'http://localhost:1337/api/';//todo: set in env file

//javascript fetch
export const fetchData = async () => {
  try {
    const response = await fetch(`${API_URL}articles?populate=*&filters[category][name][$eq]=headlines`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

const fetcher = (url: string) => axios.get(url).then((res) => res.data);
export const fetchNewsAxios = async (category: string, start: number, limit: number) => {

  try {
    var query = `${API_URL}articles?populate=*&filters[category][name][$eq]=` +category.toLowerCase()+ `&pagination[start]=` +start+ `&pagination[limit]=` +limit+ `&sort=pubDate:desc`;
    const response = await axios.get(query);
    return response.data.data;
  } catch (error) {
    return <div style={{ color: 'moccasin'}}> Error loading data </div>;
``}
};


