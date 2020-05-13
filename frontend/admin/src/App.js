import React from 'react';
import './App.css';
import { Route, Switch, Link, Redirect } from "react-router-dom";
import Home from './components/home/home'
import Manage from './components/manage/manage';
import Description from './components/description/description';

function App() {
  return (
    <div>
      <h1>Admin Pag</h1>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/manage" component={Manage} />
          <Route path="/description/:id" component={Description} />
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
