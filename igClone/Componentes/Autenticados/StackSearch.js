import { createStackNavigator } from 'react-navigation';
import Search from './Search';
import Publicacion from './Publicacion';
import Autor from './Profile';
import Comentarios from './Comentarios';


const StackSearch = createStackNavigator({
  Search: {
    screen: Search,
  },
  Publicacion: {
    screen: Publicacion,
  },
  Autor: {
    screen: Autor,
  },
  Comentarios: {
    screen: Comentarios,
  },

});

StackSearch.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];

  const navigationOptions = {};


  if (routeName === 'Comentarios') { navigationOptions.tabBarVisible = false; }
  return navigationOptions;
};

export { StackSearch };
