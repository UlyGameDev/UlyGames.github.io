import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import logo from './logo.svg';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <header>
    <link rel="icon" href={logo} />
    <title>UlyGames</title>
    <meta property="og:title" content="UlyGames" />
    <meta property="og:description" content="Homepage for UlyGames" />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </header>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
