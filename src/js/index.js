import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Home, About, Skills, Project, Contcat,
} from '@/containers';
import { Navigation } from '@/components';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Router>
    <Navigation />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/skills" component={Skills} />
      <Route exact path="/project" component={Project} />
      <Route exact path="/contcat" component={Contcat} />
    </Switch>
  </Router>,
  rootElement,
);
