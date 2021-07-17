import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import reportWebVitals from './reportWebVitals';
import './discord.css'

ReactDOM.render(
  <header>
    <link rel="icon" href={logo} />
    <title>UlyDiscord</title>
    <meta property="og:title" content="UlyDiscord" />
    <meta property="og:description" content="Discord Server for Uly, Communicate with your enemies" />
    <React.StrictMode>
        <div class="header"> 
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    </React.StrictMode>
  </header>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
