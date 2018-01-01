import userVariant from './userVariant';
import report from './report';
import user from './user';
/*import subscription from './subscription';
import contact from './contact';
import counter from './counter';
import post from './post';
import upload from './upload';*/
import mailer from './mailer';

import graphqlTypes from './graphqlTypes';
import apolloEngine from './apolloEngine';
import './debug';

import Plugin from './plugin';

export default new Plugin(
  userVariant,
  report,
  user,
  /*counter,
  post,
  upload,
  subscription,
  contact,*/
  mailer,
  graphqlTypes,
  apolloEngine
);
