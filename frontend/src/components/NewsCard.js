'use server'
import Link from 'next/link';
import Image from 'next/image';
import {timeSince} from './../Utils.js';
import { Stack } from 'react-bootstrap';

//todo: dynamic resize. card is not responsive
//todo: get from db
const NewsCard = () => {
  const newsItem = [
    {
      title: "Joe Biden falls again",
      category: "headlines",
      image:
        "https://heavy.com/wp-content/uploads/2021/03/joe-biden-trips-falls.jpg?quality=65&strip=all&w=1350",
      link: "https://heavy.com/news/joe-biden-trips-tripped-falls-stumbles-video/",
      pubdate: "2023-11-13T07:25:43.511Z",
      source: "Heavy",
      sourcelogo: "https://www.google.com/s2/favicons?sz=16&domain_url=heavy.com/",
    },
    {
        title: "Money printer goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
        category: "business",
        image: "https://i.ytimg.com/vi/O1hCLBTD5RM/maxresdefault.jpg",
        link: "https://www.forbes.com/sites/williammeehan/2020/10/21/can-the-federal-reserve-print-money-forever-or-how-continuing-to-print-money-to-support-deficit-spending-may-end-badly-with-chinas-help/?sh=2437689958d4",
        pubdate: "2023-11-13T08:25:43.511Z",
        source: "Forbes",
        sourcelogo: "https://www.google.com/s2/favicons?sz=16&domain_url=forbes.com",
    },
    {
        title: "Kessoku Band to headline Glastonbury Festival",
        category: "culture",
        image:
          "http://img.youtube.com/vi/p010N38zFrA/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        pubdate: "2023-11-12T12:25:43.511Z",
        source: "NME",
        sourcelogo: "https://www.google.com/s2/favicons?sz=16&domain_url=nme.com",
    },
    {
        title: "Thomas Muller goes reverse Michael Jackson",
        category: "sports",
        image:
          "https://i.ytimg.com/vi/nWJVa6FI9t4/maxresdefault.jpg",
        link: "https://www.youtube.com/playlist?list=PLzf_fTyARq45rEWdDG6jxEoWqdo_OzWBy",
        pubdate: "2023-11-11T18:25:43.511Z",
        source: "Youtube",
        sourcelogo: "https://www.google.com/s2/favicons?sz=16&domain_url=youtube.com",
    },
    {
      title: "Joe Biden falls again",
      category: "headlines",
      image:
        "https://heavy.com/wp-content/uploads/2021/03/joe-biden-trips-falls.jpg?quality=65&strip=all&w=1350",
      link: "https://heavy.com/news/joe-biden-trips-tripped-falls-stumbles-video/",
      pubdate: "2023-11-13T07:25:43.511Z",
      source: "Heavy",
      sourcelogo: "https://www.google.com/s2/favicons?sz=16&domain_url=heavy.com/",
    },
    {
        title: "Money printer goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
        category: "business",
        image: "https://i.ytimg.com/vi/O1hCLBTD5RM/maxresdefault.jpg",
        link: "https://www.forbes.com/sites/williammeehan/2020/10/21/can-the-federal-reserve-print-money-forever-or-how-continuing-to-print-money-to-support-deficit-spending-may-end-badly-with-chinas-help/?sh=2437689958d4",
        pubdate: "2023-11-13T08:25:43.511Z",
        source: "Forbes",
        sourcelogo: "https://www.google.com/s2/favicons?sz=16&domain_url=forbes.com",
    },
    {
        title: "Kessoku Band to headline Glastonbury Festival",
        category: "culture",
        image:
          "http://img.youtube.com/vi/p010N38zFrA/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        pubdate: "2023-11-12T12:25:43.511Z",
        source: "NME",
        sourcelogo: "https://www.google.com/s2/favicons?sz=16&domain_url=nme.com",
    },
    {
        title: "Thomas Muller goes reverse Michael Jackson",
        category: "sports",
        image:
          "https://i.ytimg.com/vi/nWJVa6FI9t4/maxresdefault.jpg",
        link: "https://www.youtube.com/playlist?list=PLzf_fTyARq45rEWdDG6jxEoWqdo_OzWBy",
        pubdate: "2023-11-11T18:25:43.511Z",
        source: "Youtube",
        sourcelogo: "https://www.google.com/s2/favicons?sz=16&domain_url=youtube.com",
    },
  ];

  return (
    <div className="card-wrapper">
    {newsItem.map(({ title, category, image, link, pubdate, source, sourcelogo }, index) => {
        return (
          <a key={index} target="_blank" href={link} rel="noopener noreferrer">
            <div className="card" style={{ backgroundImage: `linear-gradient(
              rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5) ),url(${image})` }}>        
                <div className="cardContent">
                  <div className="time-since" >{timeSince(new Date(pubdate))}</div>
                  <h2>{title}</h2>
                    <Stack className="source-stack" direction="horizontal" gap={2}>
                      <Image className="source-logo" src={sourcelogo} alt="logo" width="20" height="20"/>
                      <div className="source-text">{source}</div>
                    </Stack>
                </div>
                <style>{`
                    .card {
                      margin: 10px;
                      // width: 300px;
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
    );
    })}
    </div>
  );
};

export default NewsCard;
