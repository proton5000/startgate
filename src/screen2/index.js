import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

import {
  BATMAN_HOME,
  BATMAN_DETAILS
} from "../route";

export default createStackNavigator(
  {
    [BATMAN_HOME]: HomeScreen,
    [BATMAN_DETAILS]: DetailsScreen
  },
  {
    headerMode: 'none'
  }
)