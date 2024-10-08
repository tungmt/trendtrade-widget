import React, { useState } from 'react';
import HeadlineList from './components/HeadlineList';
import HeadlineDetail from './components/HeadlineDetail';
import TrendsList from './components/TrendsList';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';

dayjs.extend(relativeTime);

const TrendTrade = ({apiUrl, apiKey}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedHeadline, setSelectedHeadline] = useState(null);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedHeadline(null);
  };

  const selectHeadline = (headline) => {
    setSelectedHeadline(headline);
  };

  const goBack = () => {
    setSelectedHeadline(null);
  };

  return (
    <div>
      <TrendsList openPopup={openPopup} apiUrl={apiUrl} apiKey={apiKey} />
      {isPopupOpen && (
        <div className="popup-overlay">
          {!selectedHeadline ? (
            <HeadlineList selectHeadline={selectHeadline} closePopup={closePopup} apiUrl={apiUrl} apiKey={apiKey} />
          ) : (
            <HeadlineDetail trend={selectedHeadline} goBack={goBack} apiUrl={apiUrl} apiKey={apiKey} />
          )}
        </div>
      )}
    </div>
  );
};

export default TrendTrade;
