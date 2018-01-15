import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, Redirect, hashHistory, browserHistory} from 'react-router';

import Test from './app/actions/test.js';
import No from './app/actions/no.js';

const app = document.getElementById('app');


render((
  <Router history={browserHistory}>
    <Route path="/" component={Test}>
      <IndexRoute component={No}/>
    </Route>
  </Router>
), document.getElementById('app'))
