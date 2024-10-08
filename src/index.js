import React, { useState } from 'react';
import { TrendList } from './components/TrendList';
import { TrendDetail } from './components/TrendDetail';

const TrendLibrary = ({ apiUrl, apiKey }) => {
  const [selectedTrendId, setSelectedTrendId] = useState(null);

  const handleSelectTrend = (id) => {
    setSelectedTrendId(id);
  };

  const handleBack = () => {
    setSelectedTrendId(null);
  };

  return (
    <div>
      {!selectedTrendId ? (
        <TrendList apiUrl={apiUrl} apiKey={apiKey} onSelectTrend={handleSelectTrend} />
      ) : (
        <TrendDetail apiUrl={apiUrl} apiKey={apiKey} trendId={selectedTrendId} onBack={handleBack} />
      )}
    </div>
  );
};

export default TrendLibrary;
