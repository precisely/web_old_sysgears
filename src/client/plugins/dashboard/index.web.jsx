import React from 'react';
import { NavLink } from 'react-router-dom';
import { AuthRoute, AuthNav } from '../user/containers/Auth';
import { MenuItem } from '../../plugins/common/components/web';
import Dashboard from './containers/Dashboard';
import reducers from './reducers';

import Plugin from '../plugin';

export default new Plugin({
  route: <AuthRoute exact path="/" component={Dashboard} />,
  navItem: (
    <MenuItem key="dashboard">
      <AuthNav>
        <NavLink exact to="/" className="nav-link" activeClassName="active">
          Dashboard
        </NavLink>
      </AuthNav>
    </MenuItem>
  ),
  reducer: { dashboard: reducers }
});
