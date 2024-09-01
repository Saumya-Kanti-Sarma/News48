import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Css/NewsMainAndSkeleton.css"
import C_Nav from "../Components/Nav/C_Nav.jsx"
const NewsMainAndSkeleton = ({ paramURL }) => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const URL = paramURL;
    axios.get(URL)
      .then(response => {
        setNewsData(response.data.AllNews);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };

  const likeHandler = async (id, index, isLiked) => {
    const URL = `https://reactnews24x7backend.onrender.com/api/key/${import.meta.env.VITE_BACKEND_API_KEY}/publisher/editnews/${id}`;
    const updatedNewsData = [...newsData];

    if (isLiked) {
      // Unlike the news item
      updatedNewsData[index].likes -= 1;
      updatedNewsData[index].isLiked = false;
      updatedNewsData[index].likeIcon = "/like_gray.svg";
    } else {
      // Remove dislike if previously disliked
      if (updatedNewsData[index].isDisLiked) {
        updatedNewsData[index].dislikes -= 1;
        updatedNewsData[index].isDisLiked = false;
        updatedNewsData[index].dislikeIcon = "/like_gray.svg";
      }
      // Like the news item
      updatedNewsData[index].likes += 1;
      updatedNewsData[index].isLiked = true;
      updatedNewsData[index].likeIcon = "/like_blue.svg";
    }

    try {
      await axios.put(URL, {
        likes: updatedNewsData[index].likes,
        dislikes: updatedNewsData[index].dislikes
      });
      setNewsData(updatedNewsData);
    } catch (error) {
      console.error("Error updating like status:", error);
    }
  };

  const disLikeHandler = async (id, index, isDisLiked) => {
    const URL = `https://reactnews24x7backend.onrender.com/api/key/${import.meta.env.VITE_BACKEND_API_KEY}/publisher/editnews/${id}`;
    const updatedNewsData = [...newsData];

    if (isDisLiked) {
      // Remove dislike from the news item
      updatedNewsData[index].dislikes -= 1;
      updatedNewsData[index].isDisLiked = false;
      updatedNewsData[index].dislikeIcon = "/like_gray.svg";
    } else {
      // Remove like if previously liked
      if (updatedNewsData[index].isLiked) {
        updatedNewsData[index].likes -= 1;
        updatedNewsData[index].isLiked = false;
        updatedNewsData[index].likeIcon = "/like_gray.svg";
      }
      // Dislike the news item
      updatedNewsData[index].dislikes += 1;
      updatedNewsData[index].isDisLiked = true;
      updatedNewsData[index].dislikeIcon = "/like_blue.svg";
    }

    try {
      await axios.put(URL, {
        likes: updatedNewsData[index].likes,
        dislikes: updatedNewsData[index].dislikes
      });
      setNewsData(updatedNewsData);
    } catch (error) {
      console.error("Error updating dislike status:", error);
    }
  };

  const detalNewsPage = (id) => {
    navigate(`/news/${id}`);
    console.log(id);

  };
  return (
    <>
      <C_Nav />
      <h1 className='h1-heading'>Breaking News</h1>
      {loading ? (
        Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="brLoading-news">
            <div className="img-brLoading"></div>
            <div className="text-brLoading">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ))
      ) : (
        newsData.map((newsItem, index) => (
          <div key={index} className="br-news">
            <img src={newsItem.image || "/def_img.jpg"} className="img-br" />
            <div className="text-content-br">
              <div className="texts-info">
                <h1>{truncateText(newsItem.title, 10)}</h1>
                <p>{truncateText(newsItem.content, 15)}
                  <button onClick={() => detalNewsPage(newsItem._id)}>Read More</button></p>
              </div>
              <div className="like-dislike">
                <div onClick={() => likeHandler(newsItem._id, index, newsItem.isLiked)}>
                  <img src={newsItem.likeIcon || "/like_gray.svg"} className="like-img" />
                  <p>{newsItem.likes}</p>
                </div>
                <div onClick={() => disLikeHandler(newsItem._id, index, newsItem.isDisLiked)}>
                  <p>{newsItem.dislikes}</p>
                  <img src={newsItem.dislikeIcon || "/like_gray.svg"} className="dislike-img" />
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};


export default NewsMainAndSkeleton
