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
    // console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const fetchDataHeadlines = async () => {
  try {
    const response = await axios.get(`${API_URL}articles?populate=*&filters[category][name][$eq]=headlines&sort=pubDate:desc`);
    return response.data;
  } catch (error) {
    return <div> Error loading data </div>;
``}
};