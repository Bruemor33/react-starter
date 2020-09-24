import * as React from 'react';

import PageInterface from '../PageInterface';
import UnAuthenticatedLayout from './shared/layout/unauthenticated-layout/unauthenticated-layout.component';

class App extends React.Component<PageInterface, {}> {
  render() {
    return (
      <div>
        <UnAuthenticatedLayout></UnAuthenticatedLayout>
      </div>
    );
  }
}

export default App;
