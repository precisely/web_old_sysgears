import variantList from './variantList';
import report from './report';
import home from './home';
import user from './user';
import pageNotFound from './pageNotFound';
import './favicon';

import Plugin from './plugin';

export default new Plugin(variantList, report, home, user, pageNotFound);
