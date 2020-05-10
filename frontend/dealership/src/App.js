import React from 'react';
import { Route, Switch, Link, Redirect } from "react-router-dom";
import './App.css';
import Home from './components/home/home';
import Financing from './components/financing/financing';
import Inventory from './components/inventory/inventory';
import Contact from './components/contact/contact'

function App() {
  return (
    <div>
      <header>
        <nav>
          <img src="https://i.imgur.com/j5hbxGz.jpg" />
          <Link to="/">
            <h1>Ricky's Auto Motors</h1>
          </Link>
          <Link to="/inventory">
            <h2>Inventory</h2>
          </Link>
          <Link to="/financing">
            <h2>Financing</h2>
          </Link>
          <Link to="/contact">
            <h2>Contact</h2>
          </Link>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/financing" component={Financing} />
          <Route path="/inventory" component={Inventory} />
          <Route path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
