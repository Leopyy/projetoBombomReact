import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Showcase from '../pages/Showcase';

const Routes: React.FC =() => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/showcase" component={Showcase} />
  </Switch>
);

export default Routes;