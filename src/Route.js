import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './component/Home';
import App from './component/App';
import Quote from './component/Quote';
import Navbar from './component/Navbar';

const Routes = () => (

  <main>
    <Navbar />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/Quote" component={Quote} />
      <Route path="/App" component={App} />
      <Route component={Error} />
    </Switch>
  </main>
);

export default Routes;
