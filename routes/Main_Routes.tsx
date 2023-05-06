import React from 'react'
import { DrawerItem, createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
 import Home from '../screen/Home';
import Header from '../shared/Header';
import About from '../screen/About';
import {useNavigation,} from '@react-navigation/native'
import CustomDrawer from './CustomDrawer';
import Logout from './Login'
const Drawer = createDrawerNavigator();

function LeftDrawerScreen() {
  return (
    <Drawer.Navigator
      id="LeftDrawer"
      screenOptions={{ drawerPosition: 'left', header : () => <Header/>, }}
      drawerContent={props => <CustomDrawer {...props} />}
     >
      <Drawer.Screen 
        name='Home'
        component={Home}/>
      <Drawer.Screen 
        name='About'
        component={About}/>
      <Drawer.Screen 
        name='Logouts'
        component={Logout}/>
        
    </Drawer.Navigator>
   
  );
}

export default function Main_Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        id="RightDrawer"
        screenOptions={{
          headerShown : false,
          drawerPosition: 'right'
        }}
       >
        <Drawer.Screen
          name="Right_Drawer"
          component={LeftDrawerScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
