import * as React from 'react';

import PageInterface from './PageInterface';
import UnAuthenticatedLayout from './app/shared/layout/unauthenticated-layout/unauthenticated-layout.component';

class App extends React.Component<PageInterface, {}> {
  render() {
    return (
      <div className="App">
        <UnAuthenticatedLayout></UnAuthenticatedLayout>
      </div>
    );
  }
}

export default App;
