import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
 import Home from '../screen/Home';
import Header from '../shared/Header';
import About from '../screen/About';
import CustomDrawer from './CustomDrawer';

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
    </Drawer.Navigator>
   
  );
}

export default function Main_Routes() {
  
  return (
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
  );
}
