import React, { useEffect, useState } from 'react';
import '../styles/HeadlineDetail.css';
// import { fetchTrendDetail } from '../services/api';
import {convertDateTimeFromNow} from '../utils/convertTime'

const HeadlineDetail = ({ trend, goBack, apiUrl, apiKey }) => {
    const [trendDetail, setTrendDetail] = useState(trend);
    // const [loading, setLoading] = useState(true);
  
    // useEffect(() => {
    //   const fetchData = async () => {
    //     const result = await fetchTrendDetail(apiUrl, apiKey, trend.id);
    //     console.log({result})
    //     if(result && result.symbol) {
    //       setTrendDetail(result);
    //     }
        
    //     setLoading(false);
    //   };
  
    //   fetchData();
    // }, [apiUrl, apiKey, trend]);

  return (
    <div className="headline-detail">
      <button className="back-button" onClick={goBack}>← Back</button>

      <div className="headline-summary">
        <h2>{trendDetail.title}</h2>
        <div className="headline-meta">
          <span>{trendDetail.symbol}</span>
          <span>{convertDateTimeFromNow(trendDetail.createdAt)}</span>
        </div>
      </div>

      <div className="company-details">
        <div className="company-info">
          <h3>{trendDetail.company}</h3>
          <span className={`trend-badge ${trendDetail.impact ? trendDetail.impact.toLowerCase() : 'positive'}-bg`}>
            {trendDetail.impact}
          </span>
        </div>
        <div className="company-price">
          <p>Current price: <strong>${trendDetail.currentPrice}</strong></p>
          <p>Current trend: <strong className={trendDetail.impact && parseFloat(trendDetail.currentTrend) > 0 ? 'positive-text' : 'negative-text'}>
            {`${trendDetail.currentTrend}%`}
          </strong></p>
        </div>
      </div>

      <div className="ai-prediction">
        <h4>⭐ AI Prediction</h4>
        <p><strong>{trendDetail.company} ${trendDetail.symbol}</strong></p>
        <p><strong>Impact: </strong>{trendDetail.impact}</p>
        <p><strong>Why: </strong>{trendDetail.why}</p>
      </div>
    </div>
  );
};

export default HeadlineDetail;
