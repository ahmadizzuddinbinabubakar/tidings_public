// 'use server'
'use client'
import Image from 'next/image';
import {timeSince, imageHandler} from '../utils/Utils.tsx';
import { Stack } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { fetchNewsAxios } from './../utils/api/StrapiAPI';

//todo: pagination
//todo: infinite scroll + lazy loading
//todo: dynamic resize. card is not responsive
const NewsCard = (pageinfo) => {

  try {
    // console.log('category: ' +pageinfo.category);
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchDataFromApi = async () => {
      const result = await fetchNewsAxios(pageinfo.category);
        if (result) {
          setData(result);
        }
      };

      fetchDataFromApi();
    }, []);

    if (!data) return <div>Loading...</div>;
    // console.log(data);

    return (

      <div className="card-wrapper">
      {data.data.map((items, idx) => (
        <div key={data.data[idx].id}>
          <a target="_blank" href={items.attributes.link} rel="noopener noreferrer">
            <div className="card" style={{ backgroundImage: `linear-gradient(
              rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5) ),url(${imageHandler(items.attributes.image, items.attributes.category.data.attributes.defaultImage_link)})` }}>        
                <div className="cardContent">
                  <div className="time-since" >{timeSince(new Date(items.attributes.pubDate))}</div>
                  <h2>{items.attributes.title}</h2>
                    <Stack className="source-stack" direction="horizontal" gap={2}>
                      <Image className="source-logo" src={items.attributes.source.data.attributes.logo} alt="logo" width="20" height="20"/>
                      <div className="source-text">{items.attributes.source.data.attributes.display_name}</div>
                    </Stack>
                </div>
                <style>{`
                    .card {
                      margin: 10px;
                      // width: 300vw;
                      min-width: 800px;
                      max-width: 75%;
                      height: 200px;
                      background-size: cover;
                      background-position: center top;
                      color: white;
                      border-radius: 25px;
                      overflow: hidden;
                      position: relative;
                      z-index: -1;
                    }           
                    .cardContent {
                      position: absolute;
                      bottom: 0;
                      left: 0;
                      padding: 20px;
                    }
                    .source-stack {
                      margin: 5px 0 0;
                      padding: 0;
                      list-style: none;
                      display: flex;
                      flex-wrap: wrap;
                    }
                    .source-logo {
                      margin-right: 10px;
                    }
                    .source-text {
                      color: silver;
                    }
                    .time-since {
                      color: silver;
                    }
                `}</style>
            </div>
          </a>
    </div>
    ))} 
    </div>
    );

  } catch (error) {
      return <div> Loading data... </div>;
  }
};

export default NewsCard;
