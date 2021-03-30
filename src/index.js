import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Main';
import Tab from './Tab';
import Landing from './Landing'
import TestTab from './TestTab';
import Cookie from './JustCookie';

function App() {
  return (
      <main>
          <Switch>
              <Route path="/" component={Main} exact />
              <Route path="/tab" component={Tab} />
              <Route path="/landing" component={Landing} />
              <Route path="/test_tab" component={TestTab} />
              <Route path="/cookie" component={Cookie} />
          </Switch>
      </main>
  )
}

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>, 
  document.getElementById('root')
);
