import React from 'react';
import { Container, CssBaseline, Typography, AppBar, Toolbar, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import TrendLibrary from 'trendtrade-widget';
import theme from './theme';

function App() {
  const apiUrl = "https://trendtrade-orcin.vercel.app/api";
  const apiKey = "98isfmjy89em1zpt0a1";

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Trend Insights
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Trend Explorer
          </Typography>
          <Typography variant="body1" gutterBottom>
            Explore the latest trends with in-depth analysis.
          </Typography>
          <TrendLibrary apiUrl={apiUrl} apiKey={apiKey} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
