import React, { useEffect, useState } from 'react';
import "./News.css";
import Navbar from "../../../components/navbar/Navbar"
import Loader from "../../../components/Loader/Loader";
import { useNavigate } from 'react-router-dom';

const News = () => {
  const [transform, setTransform] = useState(100); // spelling correction "trasform" -> "transform"
  const [news, setNews] = useState([]);
  const [loader, setLoader] = useState("none");
  const [category, setCategory] = useState("breaking-news");
  const [title, setTitle] = useState("Breaking-News");
  const navigate = useNavigate()

  function handleMenu() {
    transform === 100 ? setTransform(0) : setTransform(100);
  }

  function closeMenu() {
    if (transform === 0) {
      setTransform(100);
    } else {
      return null;
    }
  }

  useEffect(() => {
    // Fetch news whenever category changes
    setLoader("block");
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_URL}/publisher/catagory/${category}`
        );
        setLoader("none");
        const data = await response.json();
        setNews(data.NewsData);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoader("none");
      }
    };

    fetchNews();
  }, [category]); // Run effect when category changes

  // Helper function to handle category change
  const handleCategoryChange = (newCategory, newTitle) => {
    setCategory(newCategory);
    setTitle(newTitle);
    closeMenu(); // Close menu after selection
  };

  return (
    <>
      <div className="main-home-area">
        <nav id='nav-area'><Navbar /></nav>

        <main id='main-area'>
          <div className="news-menu" style={{
            left: `-${transform}%`
          }}>
            <ul className='news-ul'>
              <li className='news-links' onClick={() => handleCategoryChange("breaking-news")}>Breaking-News</li>
              <li className='news-links' onClick={() => handleCategoryChange("national-headlines")}>National-Headlines</li>
              <li className='news-links' onClick={() => handleCategoryChange("international-headlines")}>International-Headlines</li>
              <li className='news-links' onClick={() => handleCategoryChange("education")}>Education</li>
              <li className='news-links' onClick={() => handleCategoryChange("sports")}>Sports</li>
              <li className='news-links' onClick={() => handleCategoryChange("tech")}>Tech</li>
              <li className='news-links' onClick={() => handleCategoryChange("social")}>Social-Media</li>
              <li className='news-links' onClick={() => handleCategoryChange("politics")}>National-Politics</li>
              <li className='news-links' onClick={() => handleCategoryChange("geo-politics")}>Geo-Politics</li>
              <li className='news-links' onClick={() => handleCategoryChange("stock-market")}>Daily-Nifty</li>
              <li className='news-links' onClick={() => handleCategoryChange("stock-market")}>Daily-Sensex</li>
              <li className='news-links' onClick={() => handleCategoryChange("wall-street")}>Wall-Street-Journal</li>
              <li className='news-links' onClick={() => handleCategoryChange("crypto")}>Crypto-Daily</li>
              <li className='news-links' onClick={() => handleCategoryChange("forexs")}>Forex-Daily</li>
            </ul>
          </div>

          <aside className='news-contents'>
            <h1>Content</h1>
            <ul className='news-ul'>
              <li className='news-links' onClick={() => handleCategoryChange("breaking-news")}>Breaking-News</li>
              <li className='news-links' onClick={() => handleCategoryChange("national-headlines")}>National-Headlines</li>
              <li className='news-links' onClick={() => handleCategoryChange("international-headlines")}>International-Headlines</li>
              <li className='news-links' onClick={() => handleCategoryChange("education")}>Education</li>
              <li className='news-links' onClick={() => handleCategoryChange("sports")}>Sports</li>
              <li className='news-links' onClick={() => handleCategoryChange("tech")}>Tech</li>
              <li className='news-links' onClick={() => handleCategoryChange("social")}>Social-Media</li>
              <li className='news-links' onClick={() => handleCategoryChange("politics")}>National-Politics</li>
              <li className='news-links' onClick={() => handleCategoryChange("geo-politics")}>Geo-Politics</li>
              <li className='news-links' onClick={() => handleCategoryChange("stock-market")}>Daily-Nifty</li>
              <li className='news-links' onClick={() => handleCategoryChange("stock-market")}>Daily-Sensex</li>
              <li className='news-links' onClick={() => handleCategoryChange("wall-street")}>Wall-Street-Journal</li>
              <li className='news-links' onClick={() => handleCategoryChange("crypto")}>Crypto-Daily</li>
              <li className='news-links' onClick={() => handleCategoryChange("forexs")}>Forex-Daily</li>
            </ul>
            <p>Your Feedback matters! <br /> Share your feedback on <b>news48@gmail.com</b></p>
          </aside>

          <div className="main-news-area" onClick={closeMenu}>
            <div className="loader-loadig-area" style={{ display: loader }}>
              <Loader paramBgColor={"#000"} paramWidth={"70px"} paramPadding={"10px"} />
            </div>
            <div className="news-menu-btn">
              <img src="./Basic/menu.svg" id="news-menu-btn" onClick={handleMenu} />
              <h1 id='title-of-content'>{title}</h1> {/* Dynamic title based on category */}
              <p>some miss ele</p>
            </div>

            {/* Iterate over the news data */}
            {news.map((item, index) => (
              <div className="news-display-div" key={index}>
                <div className="img-child">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="content-child">
                  <div className='title-Content'>
                    <h1 onClick={() => { navigate(`/news/${item._id}`) }}>{item.title}</h1>
                    <p>{item.content.substring(0, 200)}... <b onClick={() => { navigate(`/news/${item._id}`) }}>Read More</b></p>
                  </div>
                  <div className='name-date'>
                    <p>{item.publisherName}</p>
                    <p>{new Date(item.date).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

export default News;
