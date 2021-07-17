import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <link rel="icon" href={logo} />
        <title>UlyGames</title>
        <meta property="og:title" content="UlyGames" />
        <meta property="og:description" content="Homepage for UlyGames" />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Welcome to UlyGames!
        </h1>
        <iframe class="discord" src="https://e.widgetbot.io/channels/2865431663638347787/865804908917424138" height="600" width="800"></iframe>
      </header>
      <body>
      </body>
    </div>
  );
}

export default App;
