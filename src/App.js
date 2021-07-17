import logo from './logo.svg';
import './App.css';
import Disc from './discord.js'
import AboutP from './about.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <div class="dropdown">
            <Link to="/" class="dropbtn">Home</Link>
          </div>
          <div class="dropdown">
            <Link to="/about" class="dropbtn">About</Link>
          </div>
          <div class="dropdown">
            <Link to="/Discord" class="dropbtn">Discord</Link>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Discord">
            <Disc />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Discord() {
  return <h2>Discord</h2>;
}

export default App;
