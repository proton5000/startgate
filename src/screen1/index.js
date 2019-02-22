import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

import {
  STARGATE_HOME,
  STARGATE_DETAILS
} from "../route";

export default createStackNavigator(
  {
    [STARGATE_HOME]: HomeScreen,
    [STARGATE_DETAILS]: DetailsScreen
  },
  {
    headerMode: 'none'
  }
)