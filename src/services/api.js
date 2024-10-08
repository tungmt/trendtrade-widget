import axios from 'axios';

export const fetchTrendsList = async (apiUrl, apiKey) => {
  try {
    const response = await axios.get(`${apiUrl}/trend/list`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching trends:', error);
    return [];
  }
};

export const fetchTrendDetail = async (apiUrl, apiKey, trendId) => {
  try {
    const response = await axios.get(`${apiUrl}/trend/detail/${trendId}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching trend detail:', error);
    return null;
  }
};
