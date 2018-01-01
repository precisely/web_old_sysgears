import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { MenuItem } from '../../plugins/common/components/web';
import VariantList from './containers/VariantList';
import reducers from './reducers';

import Plugin from '../plugin';

export default new Plugin({
  route: <Route exact path="/variantList" component={VariantList} />,
  navItem: (
    <MenuItem key="variantList">
      <NavLink to="/variantList" className="nav-link" activeClassName="active">
        VariantList
      </NavLink>
    </MenuItem>
  ),
  reducer: { variantList: reducers }
});
