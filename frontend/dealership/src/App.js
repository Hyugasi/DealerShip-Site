import React from 'react';
import { Route, Switch, Link, Redirect } from "react-router-dom";
import './App.css';
import Home from './components/home/home';
import Financing from './components/financing/financing';
import Inventory from './components/inventory/inventory';
import Contact from './components/contact/contact'

function App() {
  function showMenu() {
    const hidden = `$(".menItem").css("display", "flex")`
    return hidden
  }
  return (
    <div>
      <header>
        <nav>
          <Link to="/">
            <h1>Ricky's Auto Motors</h1>
          </Link>
          <Link to="/inventory">
            <h2 className="menItem">Inventory</h2>
          </Link>
          <Link to="/financing">
            <h2 className="menItem">Financing</h2>
          </Link>
          <Link to="/contact">
            <h2 className="menItem">Contact</h2>
          </Link>
          <span class="wheel" onClick={showMenu}></span>
        </nav>

        <img src="https://i.imgur.com/j5hbxGz.jpg" alt="Ricky's Auto Motors" />
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
    </div >
  );
}

export default App;
