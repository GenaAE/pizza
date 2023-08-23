import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/styles/default.scss';

import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import ScrollToTop from './ScrollToTop';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* ДЛП ScrollToTop 
      = для обнуления скролла для новго компонента */}
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Provider>
);
