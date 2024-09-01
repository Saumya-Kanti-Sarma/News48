import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './CSS/C_NewsDetail.css';

const C_NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://reactnews24x7backend.onrender.com/api/key/${import.meta.env.VITE_BACKEND_API_KEY}/publisher/news/${id}`)
      .then(response => {
        setNews(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching news:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="loading-placeholder">Loading...</div>;
  }

  if (!news) {
    return <div className="error-message">News not found</div>;
  }

  return (
    <div className="news-detail-container">
      <img src={news.image} alt={news.title} className="news-detail-image" />
      <h1 className="news-detail-title">{news.title}</h1>
      <p className="news-detail-content">{news.content}</p>
      <div className="news-detail-meta">
        <span>{new Date(news.date).toLocaleDateString()}</span>
        <span>{news.views} Views</span>
      </div>
    </div>
  );
}

export default C_NewsDetail;
