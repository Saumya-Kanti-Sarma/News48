import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './CSS/C_NewsDetail.css';
import Loader from '../../Components/Loader/Loader';
import C_Nav from "../../Components/Nav/C_Nav.jsx"
import "./CSS/C_NewsDetail.css"

const C_NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`https://reactnews24x7backend.onrender.com/api/key/${import.meta.env.VITE_BACKEND_API_KEY}/publisher/news/${id}`)
      .then(response => {
        setNews(response.data.NewsData);
        setLoading(false);
        // console.log(news);

      })
      .catch(error => {
        console.error("Error fetching news:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="loading-placeholder">
      <Loader paramWidth={"8vw"} paramPadding={"10px"} paramBgColor={"#00000044"} />
    </div>;
  }

  if (!news) {
    return <div className="error-message">News not found</div>;
  }

  return (
    <>
      <C_Nav></C_Nav>
      <div className="main-news-origin">
        <h1><b>Braking News:</b> {news.title} || 48Hours.com</h1>
        <img src={news.image || "/def_img.jpg"} className="main-news-main-img" />
        <div className="date-pubname">
          <p className='nameanddate'> || Publisher by <b>{news.publisherName} </b>. On {news.date} ||</p>
        </div>
        <hr />
        <div className="like-dislike">
          <div>
            <img src={"/like_gray.svg"} className="like-img" />
            <p>{news.likes}</p>
          </div>
          <div>
            <p>{news.dislikes}</p>
            <img src={"/like_gray.svg"} className="dislike-img" />
          </div>
        </div>
        <br />
        <p className='p-content'>{news.content} <button onClick={() => { navigate("/") }}>to back...</button></p>
      </div>
    </>
  );
}

export default C_NewsDetail;
