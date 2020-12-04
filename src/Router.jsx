import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import store from './store/store-config';
import { Provider } from 'react-redux';
import './assets/styles.css';

const Router = (props) => (
  <Provider store={store} >
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Dashboard} />
      </Switch>
    </BrowserRouter>
  </Provider>

)
export default Router;