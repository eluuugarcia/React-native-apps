import { createMaterialTopTabNavigator } from 'react-navigation';
import Follow from './Follow';


const TabFollow = createMaterialTopTabNavigator(
  {
    Follow: {
      screen: Follow,
    },
    Followers: {
      screen: Follow,
    },

  },
);

TabFollow.navigationOptions = ({ navigation }) => {
  const navigationOptions = {};
  navigationOptions.header = null;
  return navigationOptions;
};


export { TabFollow };
