import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import NavBar from '../../Components/Nav/Navbar';
import './CSS/C_Search.css';

const C_Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const history = Cookies.get('searchHistory');
    if (history) {
      setSearchHistory(JSON.parse(history));
    }
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      const newHistory = [...searchHistory, searchTerm];
      Cookies.set('searchHistory', JSON.stringify(newHistory), { expires: 7 });
      setSearchHistory(newHistory);
      navigate(`/publisher/name/${searchTerm}`);
    }
  };

  return (
    <>
      <NavBar />
      <div className="search-area">
        <input
          type="text"
          placeholder="Search Publisher Here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          <img src="/search.svg" alt="Search" />
        </button>
      </div>
      <div className="history">
        <ul>
          {searchHistory.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default C_Search;
