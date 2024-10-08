import React, { useEffect, useState } from 'react';
import { fetchTrendsList } from '../services/api';
import { CircularProgress, Typography, Button, Box } from '@mui/material';

export const TrendList = ({ apiUrl, apiKey, onSelectTrend }) => {
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

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        News
      </Typography>
      {trends.map((trend, index) => (
        <Box key={index} display="flex" justifyContent="space-between" alignItems="center" padding={1}>
          <Typography variant="body1">{trend.title}</Typography>
          <Button onClick={() => onSelectTrend(trend.id)}>Details</Button>
        </Box>
      ))}
    </Box>
  );
};
