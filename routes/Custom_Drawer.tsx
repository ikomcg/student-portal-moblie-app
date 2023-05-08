import React, { useContext } from 'react'
import Home from '../screen/Home';
import Header from '../shared/Header';
import About from '../screen/About';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { DrawerItem, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { UserContext } from '../context/LoginProvider';



function CustomDrawerContent(props : DrawerContentComponentProps ) {
  const {toggleIsLogged} = useContext(UserContext)
  
  const HandleLogout =async () => {
  
    try {
      await AsyncStorage.removeItem("user")
    
    } catch(e) {
      // remove error
     }
     toggleIsLogged(false)
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Logout" onPress={HandleLogout} />
    </DrawerContentScrollView>
  );
}
const Drawer = createDrawerNavigator();

function LeftDrawerScreen() {
  return (
    <Drawer.Navigator
      id="LeftDrawer"
      screenOptions={{ drawerPosition: 'left', header : () => <Header/>, }}
      drawerContent={props => <CustomDrawerContent {...props} />}
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

export default function Portal_Routes() {
  
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
