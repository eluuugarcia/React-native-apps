import { createStackNavigator } from 'react-navigation';
import { TabFollow } from './TabFollow';
import Autor from './Profile';
import Publicacion from './Publicacion';
import Comentarios from './Comentarios';

const StackFollow = createStackNavigator({
  TabFollow: {
    screen: TabFollow,
    navigationOptions: {
      tabBarVisible: false,
    },
  },
  Autor: {
    screen: Autor,
  },
  Publicacion: {
    screen: Publicacion,
  },
  Comentarios: {
    screen: Comentarios,

  },


});

StackFollow.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const navigationOptions = {};
  if (routeName === 'Comentarios') { navigationOptions.tabBarVisible = false; }
  return navigationOptions;
};

export { StackFollow };
