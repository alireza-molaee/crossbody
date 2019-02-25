import React, { Component, Fragment } from 'react';
import { Router, Redirect, Switch, Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './scss/style.scss';
import routes from './routes';
import * as moment from 'moment-jalaali';
import 'moment/min/locales.min.js';
import history from './imports/history';

moment.loadPersian({
  usePersianDigits: true,
  dialect: 'persian-modern'
});

class App extends Component {

  componentDidMount() {
    window.initTheme();    
  }

  componentWillUpdate() {
    window.initTheme();    
    window.scrollTo(0, 0);
  }

  makeRoutsComponents() {
    return routes.map((route, index) => {
      let props = {
        key: index,
        exact: route.exact,
        path: route.path,
        component: route.component,
      }
      return <Route {...props}/>
    });
  }

  render() {
    return (
      <Fragment>
        <Router history={history}>
          <Switch>
            {this.makeRoutsComponents()}
            <Redirect to="/" />
          </Switch>
        </Router>
        <ToastContainer position={'bottom-left'} hideProgressBar />
      </Fragment>
    );
  }
}

export default App;
