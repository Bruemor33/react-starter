import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';

ReactDOM.render(
  <BrowserRouter>
    <App color="blue" />
  </BrowserRouter>,
  document.getElementById('root')
);
