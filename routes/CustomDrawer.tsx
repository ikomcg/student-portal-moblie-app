import { DrawerContentComponentProps } from '@react-navigation/drawer'
import React from 'react'
import { DrawerItem, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default CustomDrawerContent
function CustomDrawerContent( props : DrawerContentComponentProps ) {
  
  const HandleLogout =async () => {
  
    try {
      await AsyncStorage.removeItem("user")
    
    } catch(e) {
      // remove error
     }
     props.navigation.navigate('Login')
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Logout" onPress={HandleLogout} />
    </DrawerContentScrollView>
  );
}
