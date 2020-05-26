import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import './index.css';
import * as serviceWorker from './serviceWorker';
import history from './utils/history';
// import store from './utils/store';
import LoginComponent from './components/login/LoginComponent';
import ListComponent from './components/list/ListComponent';
import ListFormComponent from './components/list/ListFormComponent';
import configureStore from './utils/store';

ReactDOM.render(
  <React.StrictMode>
      <Provider store={configureStore()}>
      <Router history={history}>
          <Switch>
            <Route path="/list"  component={ListComponent} />
            <Route path="/create-list"  component={ListFormComponent} />
            <Route path="/login"  component={LoginComponent} />
            <Redirect from="/" to="/login" />
          </Switch>
      </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
