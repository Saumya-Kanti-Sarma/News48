import React, { useState, useEffect } from 'react';
import NavBar from '../../Components/Nav/P_Navbar';
import Cookie from 'js-cookie';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import './Css/P_mypublishes.css';

const P_mypublishes = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://reactnews24x7backend.onrender.com/api/key/${import.meta.env.VITE_BACKEND_API_KEY}/publisher/allNews?publisherName=${Cookie.get("usrName")}`
        );
        const data = await response.json();
        setNews(data.AllNews);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleDelete = async (articleId) => {
    if (window.confirm("Are you sure you want to delete this news?")) {
      setOpacity(0.5);
      try {
        await axios.delete(
          `https://reactnews24x7backend.onrender.com/api/key/${import.meta.env.VITE_BACKEND_API_KEY}/publisher/deletenews/${articleId}`
        );
        setNews(news.filter(article => article._id !== articleId));
        toast.success("News Deleted");
      } catch (error) {
        console.error("Error deleting news:", error);
      } finally {
        setOpacity(1);
      }
    }
  };

  return (
    <>
      <NavBar />
      <div className="news-container" style={{ opacity }}>
        {loading ? (
          <div className="skeleton-container">
            <div className="skeleton skeleton-title"></div>
            <div className="skeleton skeleton-image"></div>
            <div className="skeleton skeleton-link"></div>
            <br />
            <div className="skeleton skeleton-title"></div>
            <div className="skeleton skeleton-image"></div>
            <div className="skeleton skeleton-link"></div>
          </div>
        ) : news.length === 0 ? (
          <div className="no-news-message">
            Opps! Looks like you haven't made any Publishments yet.{' '}
            <Link to="/publisher/addnews">Click here</Link> to publish News.
          </div>
        ) : (
          news.map((article, index) => (
            <div key={index} className="news-article">
              <img
                src={article.image || 'def_img.jpg'}
                alt={article.title}
                onClick={() => setOpacity(0.5)}
                onError={(e) => {
                  e.target.src = 'def_img.jpg';
                }}
              />
              <div className='text-area-allNews'>
                <div className="article-details">
                  <h1>{`Title: ` + article.title}</h1>
                  <p>
                    {article.content.split(" ").slice(0, 20).join(" ") + " ..."}{' '}
                    <p onClick={() => { alert("Soon will be added!") }} style={{ color: "blueviolet", fontWeight: "600" }}>Read more</p>
                  </p>
                </div>
                <div className="delete-edit">
                  <img src="/delete.svg" onClick={() => handleDelete(article._id)} />
                  <img src="/edit.svg" onClick={() => alert("Edit functionality coming soon!")} />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default P_mypublishes;
