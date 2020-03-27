import 'bootstrap/dist/js/bootstrap.min';
import 'jquery.easing';
import 'normalize.css';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './custom.scss';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
