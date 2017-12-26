import home from './home';
import user from './user';
import pageNotFound from './pageNotFound';
import dashboard from './dashboard';
import './favicon';

import Plugin from './plugin';

export default new Plugin(home, dashboard, user, pageNotFound);
