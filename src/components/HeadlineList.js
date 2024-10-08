import React, { useEffect, useState } from 'react';
import '../styles/HeadlineList.css';
import { fetchTrendsList } from '../services/api';
import { convertDateTimeFromNow } from '../utils/convertTime';

const HeadlineList = ({ apiUrl, apiKey, selectHeadline, closePopup }) => {
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
    <div className="headline-list-popup">
      <div className="popup-header">
        <h2>News</h2>
        <button className="close-popup" onClick={closePopup}>✖</button>
      </div>
      {/* <div className="tab-buttons">
        <button>Feed</button>
        <button>Trending</button>
        <button>Stocks</button>
        <button>Crypto</button>
      </div> */}
      {loading ? (
        <div className="loading-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="headline-list-scrollable">
          {trends.map((headline, index) => (
            <div key={index} className="headline-item" onClick={() => selectHeadline(headline)}>
              <div className="headline-text">
                <span className="headline-title">{headline.title}</span>
                <span className="headline-source">{headline.company}</span>
              </div>
              <div className="headline-extra">
                <span className="headline-time">{convertDateTimeFromNow(headline.createdAt)}</span>
                <span className="headline-arrow">↗</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeadlineList;
