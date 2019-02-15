import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import {
  STARGATE_HOME,
  STARGATE_DETAILS
} from "../route";

export default createStackNavigator(
  {
    [STARGATE_HOME]: HomeScreen
  },
  {
    headerMode: 'none'
  }
)