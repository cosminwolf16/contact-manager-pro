import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import 'fomantic-ui-css/semantic.min.css';
import { ContactContextProvider } from './context/contact-context';
import App from './App';

ReactDOM.render(
  <ContactContextProvider>
    <Router>
      <App />
    </Router>
  </ContactContextProvider>,
  document.getElementById('root')
);
