import * as React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import './navigation.styles.scss';
import Home from '../../../home/home.component';
import About from '../../../about/about.component';

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <div className="home nav-items">
            <Link to="/">Home</Link>
          </div>
          <div className="about nav-items">
            <Link to="/about">About</Link>
          </div>
        </div>
        <div id="routing">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Navigation;
