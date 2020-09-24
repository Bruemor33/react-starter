import * as React from 'react';

import PageInterface from '../PageInterface';
import Navigation from './shared/navigation/navigation.component';

class App extends React.Component<PageInterface, {}> {
  render() {
    return (
      <div>
        <Navigation></Navigation>
        <h1>Welcome to React with Typescript</h1>
        <p>The color of this page is: {this.props.color}</p>
      </div>
    );
  }
}

export default App;
