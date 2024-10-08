import React, { useEffect, useState } from 'react';
import { fetchTrendDetail } from '../services/api';
import { CircularProgress, Typography, Box, Button } from '@mui/material';

export const TrendDetail = ({ apiUrl, apiKey, trendId, onBack }) => {
  const [trendDetail, setTrendDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchTrendDetail(apiUrl, apiKey, trendId);
      setTrendDetail(result);
      setLoading(false);
    };

    fetchData();
  }, [apiUrl, apiKey, trendId]);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Box>
      <Button onClick={onBack}>Back</Button>
      <Typography variant="h5">{trendDetail.title}</Typography>
      <Typography variant="body2">{trendDetail.content}</Typography>
    </Box>
  );
};
