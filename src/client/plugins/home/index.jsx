import { Ionicons } from '@expo/vector-icons';
import { createTabBarIconWrapper } from '../common/components/native';
import Home from './containers/Home';
import reducers from './reducers';

import Plugin from '../plugin';

export default new Plugin({
  tabItem: {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: createTabBarIconWrapper(Ionicons, {
          name: 'ios-browsers-outline',
          size: 30
        })
      }
    }
  },
  reducer: { home: reducers }
});
