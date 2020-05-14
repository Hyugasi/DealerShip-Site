import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import Home from './components/home/home'
import Manage from './components/manage/manage';
import Description from './components/description/description';
import { getAllVehicles } from './services/api-helper'
import Create from './components/create/create';


function App() {
  const [vehicles, setVehicles] = useState([])
  const [isLoading, setIsLoading] = useState(true)



  useEffect(() => {
    const makeAPICall = async () => {
      const resp = await getAllVehicles()
      setVehicles(resp)
      setIsLoading(false)
    }
    makeAPICall()
  }, [])

  return (
    <div>
      <h1>Admin Page</h1>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/manage" component={Manage} />
          <Route path="/description/:id" render={(routerProps) => (<Description vehicles={vehicles} match={routerProps.match} />)} />
          <Route path="/create" component={Create} />
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
