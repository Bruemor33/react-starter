import * as React from 'react';

import './App.scss';
import UnAuthenticatedLayout from './app/shared/layout/unauthenticated-layout/unauthenticated-layout.component';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <UnAuthenticatedLayout></UnAuthenticatedLayout>
      </div>
    );
  }
}

export default App;
