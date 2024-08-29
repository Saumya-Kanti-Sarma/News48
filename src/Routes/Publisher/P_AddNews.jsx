import React, { useEffect, useState } from 'react';
import "./Css/P_addnews.css";
import NavBar from '../../Components/Nav/Navbar';
import Cookies from 'js-cookie';
import axios from 'axios';
import Loader from '../../Components/Loader/Loader';
import toast from 'react-hot-toast';

const P_AddNews = () => {
  const [overlayer, setOverlayer] = useState("none");
  const [data, setData] = useState({
    title: null,
    content: null,
    publisherName: Cookies.get("usrName"),
    image: null,
  });
  function handleInputChange(e) {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }))
  };
  useEffect(() => {
    console.log(data);
  }, [data])

  // publishing news
  async function publishNews(e) {
    e.preventDefault();
    setOverlayer("block");
    const response = await axios.post(`https://reactnews24x7backend.onrender.com/api/key/${import.meta.env.VITE_BACKEND_API_KEY}/publisher/publish`, data);
    try {
      window.location.reload();
      toast.success(response.data.message);
      console.log(response);
      setOverlayer("none");
    } catch (error) {
      toast.error("Cannot Published")
      console.log(error);
      setOverlayer("none");
    }
  }

  return (
    <>
      <NavBar />
      <div className="add-news-container">
        <h1>Publish Your Articles and News</h1>
        <form className="add-news-form">
          {/* Title */}
          <div className="form-group">
            <label htmlFor="title">Title of News</label>
            <input type="text" id="title" name="title" placeholder="Enter the title" required onChange={handleInputChange} />
          </div>
          {/* Content */}
          <div className="form-group">
            <label htmlFor="content">Content of News</label>
            <textarea
              id="content"
              name='content'
              className="content-editable"
              placeholder="Enter the content"
              onChange={handleInputChange}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input type="url" id="image" name="image" placeholder="Enter the image URL" onChange={handleInputChange} />
          </div>
          <div className="form-actions">
            <button type="button" className="draft-button">Save as Draft</button>
            <button
              type="submit"
              className="publish-button"
              onClick={publishNews}
            >Publish
            </button>
          </div>
        </form>
      </div>
      <div className="overlayer" style={{ display: overlayer }}>
        <div className="loader-loadig-area">
          <Loader
            paramBgColor={"black"}
            paramWidth={"30px"}
          /></div>
      </div>

    </>
  );
};

export default P_AddNews;
