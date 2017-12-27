import React from 'react';
import { NavLink } from 'react-router-dom';

import { AuthRoute, AuthNav } from '../user/containers/Auth';
import Home from './containers/Home';
import Dashboard from './containers/Dashboard';
import { MenuItem } from '../common/components/web';
import Plugin from '../plugin';
import reducers from './reducers';

// export default new Plugin({
//   route: <UnauthRoute exact path="/" component={Home} />,
//   reducer: { home: reducers }
// });

export default new Plugin({
  route: <AuthRoute exact path="/" component={Dashboard} unauthComponent={Home} />,
  navItem: (
    <MenuItem key="dashboard">
      <AuthNav>
        <NavLink exact to="/" className="nav-link" activeClassName="active">
          Dashboard
        </NavLink>
      </AuthNav>
    </MenuItem>
  ),
  reducer: { home: reducers }
});
