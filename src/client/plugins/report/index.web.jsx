import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { MenuItem } from '../common/components/web';
import { AuthRoute } from '../user/containers/Auth';

import Report from './containers/Report';
import UserReport from './containers/UserReport';
import reducers from './reducers';

import Plugin from '../plugin';

export default new Plugin({
  route: [
    <AuthRoute exact path="/report/admin" scope="admin" component={Report} />,
    <AuthRoute exact path="/user/:user_id/report/:report_id" component={UserReport} />
  ],
  navItem: (
    <MenuItem key="report">
      <NavLink to="/report" className="nav-link" activeClassName="active">
        Report
      </NavLink>
    </MenuItem>
  ),
  reducer: { report: reducers }
});
