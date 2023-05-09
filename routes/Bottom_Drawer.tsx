import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import { LeftDrawerScreen } from './Custom_Drawer';
const Tab = createBottomTabNavigator();

export default function Bottom_Drawer() {
    return (
      <Tab.Navigator
      screenOptions={{
        headerShown : false,
      }}>
        <Tab.Screen name ="Home" component={Home}/>
      </Tab.Navigator>
    );
  }