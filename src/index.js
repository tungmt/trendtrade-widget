import React, { useState } from 'react';
import { TrendList } from './components/TrendList';
import { TrendDetail } from './components/TrendDetail';
import { Stack } from '@mui/material';

const TrendLibrary = ({ apiUrl, apiKey }) => {
  const [selectedTrendId, setSelectedTrendId] = useState(null);

  const handleSelectTrend = (id) => {
    setSelectedTrendId(id);
  };

  const handleBack = () => {
    setSelectedTrendId(null);
  };

  return (
    <Stack>
      {!selectedTrendId ? (
        <TrendList apiUrl={apiUrl} apiKey={apiKey} onSelectTrend={handleSelectTrend} />
      ) : (
        <TrendDetail apiUrl={apiUrl} apiKey={apiKey} trendId={selectedTrendId} onBack={handleBack} />
      )}
    </Stack>
  );
};

export default TrendLibrary;
