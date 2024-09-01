import React, { useState, useEffect } from 'react';
import Newsitem from './Newsitem';

const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log("Number of articles fetched:", data.articles.length);
      setArticles(data.articles);
    };

    fetchArticles();
  }, [category]);

  return (
    <div>
      <h2 className='text-center my-4'>Latest <span className='badge bg-danger'>News</span></h2>
      {articles.length > 0 ? (
        articles.map((news, index) => (
          <Newsitem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))
      ) : (
        <p className='text-center'>Loading...</p>
      )}
    </div>
  );
};

export default NewsBoard;
