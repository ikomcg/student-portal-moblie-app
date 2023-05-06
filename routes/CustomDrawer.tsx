import { DrawerContentComponentProps } from '@react-navigation/drawer'
import React from 'react'
import {View, TouchableOpacity, Text} from 'react-native'

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

export default CustomDrawer
