import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import reportWebVitals from './reportWebVitals';
// import { GlobalStyle, theme } from './styles/GlobalStyle';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store.js'
import './styles/reset.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    {/* <React.StrictMode> */}
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </Provider>
    {/* </React.StrictMode> */}
  </ThemeProvider>
);

reportWebVitals();
