import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import C_Nav from '../../Components/Nav/C_Nav';
import './CSS/C_Home.css';

const C_home = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://reactnews24x7backend.onrender.com/api/key/${import.meta.env.VITE_BACKEND_API_KEY}/publisher/allNews`)
      .then(response => {
        setNewsData(response.data.AllNews);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleLike = (id) => {
    axios.post(`https://reactnews24x7backend.onrender.com/api/key/${import.meta.env.VITE_BACKEND_API_KEY}/publisher/editnews/${id}`, { like: true })
      .then(() => {
        setNewsData(prevData => prevData.map(news =>
          news._id === id ? { ...news, likes: news.likes + 1 } : news
        ));
      })
      .catch(error => console.error("Error updating likes:", error));
  };

  const handleDislike = (id) => {
    axios.post(`https://reactnews24x7backend.onrender.com/api/key/${import.meta.env.VITE_BACKEND_API_KEY}/publisher/editnews/${id}`, { dislike: true })
      .then(() => {
        setNewsData(prevData => prevData.map(news =>
          news._id === id ? { ...news, dislikes: news.dislikes + 1 } : news
        ));
      })
      .catch(error => console.error("Error updating dislikes:", error));
  };

  const handleReadMore = (id) => {
    navigate(`/news/${id}`);
  };

  return (
    <>
      <C_Nav />
      <div className="loading-br-news">
        <div className="img-loadig-br"></div>
        <div className="text-loading-br">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="loading-br-news">
        <div className="img-loadig-br"></div>
        <div className="text-loading-br">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="loading-br-news">
        <div className="img-loadig-br"></div>
        <div className="text-loading-br">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="loading-br-news">
        <div className="img-loadig-br"></div>
        <div className="text-loading-br">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="loading-br-news">
        <div className="img-loadig-br"></div>
        <div className="text-loading-br">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default C_home;
