import React, { useEffect, useState } from 'react';
import '../styles/TrendsList.css';
import { fetchTrendsList } from '../services/api';

const TrendsList = ({ openPopup, apiUrl, apiKey }) => {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchTrendsList(apiUrl, apiKey);
      setTrends(result);
      setLoading(false);
    };

    fetchData();
  }, [apiUrl, apiKey]);

  return (
    <div className="horizontal-list">
      {loading && (
        <div className="loading-container">
          <div className="spinner"></div>
        </div>
      )
      }
      {!loading && trends.map((item, index) => (
        <div key={index} className="list-item">
          <span className={item.impact ? item.impact.toLowerCase() : ''}>
            {`${item.currentTrend}%`}
          </span>
          <span>${item.currentPrice}</span>
          <span>{item.symbol}</span>
        </div>
      ))}
      <button className="open-popup-btn" onClick={openPopup}>
        <span>↗</span>
      </button>
    </div>
  );
};

export default TrendsList;
