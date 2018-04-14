import { StackNavigator } from 'react-navigation'
import Home from '../screens/Home'
import Map from '../screens/Map'

const AppNavigator = StackNavigator({
  HOME: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  },
  MAP: {
    screen: Map,
    navigationOptions: {
      header: null,
    },
  },
})

export default AppNavigator