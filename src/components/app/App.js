import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { routerRoutes } from '../../routes';
import Header from './Header';

export default function App() {
  return (
    <Router>
      <Header/>
      <main>
        <Switch>
          {routerRoutes()}
        </Switch>
      </main>
    </Router>
  );
}
