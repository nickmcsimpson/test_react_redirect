import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
