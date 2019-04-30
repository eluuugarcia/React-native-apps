import { createBottomTabNavigator } from 'react-navigation';
import { createAppContainer } from 'react-navigation';
import { StackFollow } from './StackFollow';
import Profile from './Profile';
import { StackHome } from './StackHome';
import { StackSearch } from './StackSearch';
import { StackAdd } from './StackAdd';


const RutasAut = createBottomTabNavigator(
  {
    Home: {
      screen: StackHome,
    },
    Search: {
      screen: StackSearch,
    },
    Add: {
      screen: StackAdd,
    },
    Follow: {
      screen: StackFollow,
      headerMode: null,
    },
    Profile: {
      screen: Profile,
    },
  },
);

const RutasAutenticadas = createAppContainer(RutasAut);


export { RutasAutenticadas };
