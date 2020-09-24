import * as React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import './navigation.styles.scss';

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <div id="routing">
          <Switch>
            <Route path="/">// Put Home Component Here</Route>
            <Route path="/about">// Put new Component Here</Route>
          </Switch>
        </div>
        <div className="navbar">
          <div className="home nav-items">
            <Link to="/">Home</Link>
          </div>
          <div className="about nav-items">
            <Link to="/about">About</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
