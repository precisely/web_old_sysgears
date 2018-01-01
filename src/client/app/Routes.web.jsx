import React from 'react';
import { Switch } from 'react-router-dom';

import plugins from '../plugins';

console.log(
  'Routes found:\n%s',
  plugins.routes
    .map(r => {
      return `${r.props.component.name} ${r.props.path} ${r.props.exact ? 'exact' : ''} ${
        r.props.redirect ? 'redirect=' : ''
      } ${r.props.redirect || ''}`;
    })
    .join('\n')
);

export default <Switch>{plugins.routes}</Switch>;
