import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import reportWebVitals from './reportWebVitals';
// import { GlobalStyle, theme } from './styles/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </ThemeProvider>
);

reportWebVitals();
