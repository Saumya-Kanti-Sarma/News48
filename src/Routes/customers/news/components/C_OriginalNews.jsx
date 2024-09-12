import React, { useEffect, useState } from 'react';
import "./C_OriginalNews.css";
import Navbar from "../../../../components/navbar/Navbar";
import { Link, useNavigate, useParams } from 'react-router-dom';
import Loader from '../../../../components/Loader/Loader';

const C_OriginalNews = () => {
  const { id } = useParams();
  const [newsData, setNewsData] = useState(null); // Initially set to null
  const [otherData, setOtherData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_URL}/publisher/news/${id}`);
        const data = await response.json();
        setNewsData(data.NewsData);
        setLoader("none");
      } catch (error) {
        console.error('Error fetching the news item:', error);
        setLoader("none");
      }
    };

    if (id) {
      fetchNews();
    }

    // Fetch other news of the same category
    const fetchOtherNews = async () => {
      try {
        if (newsData?.category) {  // Wait until newsData is loaded and category is available
          const response = await fetch(
            `${import.meta.env.VITE_URL}/publisher/catagory/${newsData.category}`
          );
          const data = await response.json();
          setOtherData(data.NewsData);
        }
      } catch (error) {
        console.error("Error fetching other news:", error);
        setLoader("none");
      }
    };

    fetchOtherNews();
  }, [id, newsData?.category]);  // Trigger fetchOtherNews when newsData.category is available

  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main className='main-area-of-news'>

        {newsData ? (
          <>
            <h1>{newsData.title}</h1> {/* Render the news title */}
            <img src={newsData.image || "/news.jpg"} id="news-image-of-main" alt={newsData.title} /> {/* Render the news image */}
            <div className="news-info-area-of-main-news">
              <p>Date: {new Date(newsData.date).toLocaleDateString()}</p>
              <p>BY: {newsData.publish_by}</p>
            </div>
            <p className='heading-of-main-news'>
              <b>{newsData.title}</b> {/* Render the subtitle if available */}
            </p>
            <p className='content-of-main-news'>
              {newsData.content} {/* Render the full content of the news */}
            </p>
            <br />
            <h1 id='other-news-heading'>Check Other News:</h1>

          </>
        ) : (
          <div className="loader-loadig-area" >
            <Loader paramBgColor={"#000"} paramWidth={"70px"} paramPadding={"10px"} />
          </div>
        )}
      </main>

      <div className="browse-other-news">
        {otherData.slice(0, 12).map((item, index) => (
          <div key={index} className='other-news-child'>
            <img src={item.image} className='other-news-img' />
            <p
              onClick={() => {
                navigate(`/news/${item._id}`);
                window.location.reload();
              }} className='other-news-p'>
              {item.title}</p>
          </div>
        ))}
      </div>
      <p
        style={{
          textAlign: "center"
        }}
      ><Link to={"/news"}>Go Back</Link></p>
    </>
  );
};

export default C_OriginalNews;
