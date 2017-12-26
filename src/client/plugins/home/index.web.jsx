import React from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home';
import reducers from './reducers';

import Plugin from '../plugin';

export default new Plugin({
  route: <Route exact path="/" component={Home} />,
  reducer: { home: reducers }
});
