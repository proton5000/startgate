import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import StarGateHomeScreen from '../screen1/HomeScreen';

import {
  SPIDER_HOME,
  SPIDER_DETAILS,
  STARGATE_HOME
} from "../route";

export default createStackNavigator(
  {
    [SPIDER_HOME]: HomeScreen,
    [SPIDER_DETAILS]: DetailsScreen,
    [STARGATE_HOME]: StarGateHomeScreen
  },
  {
    headerMode: 'none'
  }
)