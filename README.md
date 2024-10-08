# TrendTrade Widget

`trendtrade-widget` is a React library that allows you to easily embed and interact with trend-trading data by providing an API key and API URL. The widget fetches and displays trading trends based on the data from the provided API.

## Installation

To install the `trendtrade-widget` library, use npm or yarn:

### NPM:

```bash
npm install trendtrade-widget
```

### Yarn:
```bash
yarn add trendtrade-widget
```

### Usage

Import the `TrendTrade` component and pass the required props (`apiKey` and `apiUrl`) to initialize and run the widget.

### Example:

```jsx
import React from 'react';
import TrendTrade from 'trendtrade-widget';

const App = () => {
  return (
    <div>
      <h1>Trend Trading Widget</h1>
      <TrendTrade 
        apiKey="your-api-key-here"
        apiUrl="https://api.example.com/trends"
      />
    </div>
  );
};

export default App;
```

### Props:

- `apiKey` (required): Your unique API key to access the trend trading data.
- `apiUrl` (required): The URL of the API endpoint from which the trend trading data is fetched.
