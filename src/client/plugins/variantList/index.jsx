import { Ionicons } from '@expo/vector-icons';
import { createTabBarIconWrapper } from '../common/components/native';
import VariantList from './containers/VariantList';
import reducers from './reducers';

import Plugin from '../plugin';

export default new Plugin({
  tabItem: {
    VariantList: {
      screen: VariantList,
      navigationOptions: {
        tabBarIcon: createTabBarIconWrapper(Ionicons, {
          name: 'ios-browsers-outline',
          size: 30
        })
      }
    }
  },
  reducer: { variantList: reducers }
});
