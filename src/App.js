import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';

import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Applies global styles including font */}
      <Router>
        <Header />
        <AppRoutes />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
