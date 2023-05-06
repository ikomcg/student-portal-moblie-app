import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {View, TouchableOpacity, Text, } from 'react-native'
import { DrawerItem, createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationStackProp } from 'react-navigation-stack';
const CustomDrawer = (props : DrawerContentComponentProps) => {

  return (
    <View>
        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
            <Text>
                 Logout
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default CustomDrawerContent
function CustomDrawerContent(props : DrawerContentComponentProps) {
  const navigation = useNavigation<NavigationStackProp>();

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Logout" onPress={handleLogout} />
    </DrawerContentScrollView>
  );
}
