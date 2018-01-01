import { Ionicons } from '@expo/vector-icons';
import { createTabBarIconWrapper } from '../common/components/native';
import Report from './containers/Report';
import reducers from './reducers';

import Plugin from '../plugin';

export default new Plugin({
  tabItem: {
    Report: {
      screen: Report,
      navigationOptions: {
        tabBarIcon: createTabBarIconWrapper(Ionicons, {
          name: 'ios-browsers-outline',
          size: 30
        })
      }
    }
  },
  reducer: { report: reducers }
});
