import { createStackNavigator } from 'react-navigation';
import Add from './Add';
import SeleccionarGaleria from './SeleccionarGaleria';


const StackAdd = createStackNavigator({
  Add: {
    screen: Add,
  },
  Seleccion: {
    screen: SeleccionarGaleria,
  },


});

StackAdd.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const navigationOptions = {};
  if (routeName === 'Seleccion') {
    navigationOptions.tabBarVisible = false;
  }
  return navigationOptions;
};


export { StackAdd };
