import React, { useState, useEffect } from 'react';
import { Route, Switch, Link, Redirect } from "react-router-dom";
import './App.css';
import Home from './components/home/home';
import Financing from './components/financing/financing';
import Inventory from './components/inventory/inventory';
import Contact from './components/contact/contact'
import Info from './components/info/info';
import { getAllVehicles } from './components/api-helper';

function App() {
  const [vehicles, setVehicles] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const makeAPICall = async () => {
      const resp = getAllVehicles()
      setVehicles(resp)
      setIsLoading(false)
    }
    makeAPICall()
  }, [])

  return (
    <div>
      <header>
        <nav>
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
          <Route exact path="/inventory" component={Inventory} />
          <Route path="/inventory/:id" render={(routerProps) => (<Info vehicles={vehicles} match={routerProps.match} />)} />
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
