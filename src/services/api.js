export const fetchTrendsList = async (apiUrl, apiKey) => {
  try {
    const response = await fetch(`${apiUrl}/trend/list`, {
      method: 'POST',
      body: JSON.stringify({apiKey}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data
  } catch (error) {
    console.error('Error fetching trends:', error);
    return [];
  }
};

export const fetchTrendDetail = async (apiUrl, apiKey, trendId) => {
  try {
    const response = await fetch(`${apiUrl}/trend/detail`, {
      method: 'POST',
      body: JSON.stringify({apiKey, trendId}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data
  } catch (error) {
    console.error('Error fetching trend detail:', error);
    return null;
  }
};
