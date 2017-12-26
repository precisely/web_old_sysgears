import { Ionicons } from '@expo/vector-icons';
import { createTabBarIconWrapper } from '../common/components/native';
import Dashboard from './containers/Dashboard';
import reducers from './reducers';

import Plugin from '../plugin';

export default new Plugin({
  tabItem: {
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        tabBarIcon: createTabBarIconWrapper(Ionicons, {
          name: 'ios-browsers-outline',
          size: 30
        })
      }
    }
  },
  reducer: { dashboard: reducers }
});
