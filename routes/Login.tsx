import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../screen/Login/Login'
import Forgot from '../screen/Login/forgot'
import Portal from './Main_Routes'


const Stack = createStackNavigator();

export default function StackNavigator()  {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown : false
            }}>
                    <Stack.Screen  name="Home" component={Portal}/>
               
                    <Stack.Screen name="Login" component={Login} initialParams={{ setIsLoggedIn: setIsLoggedIn }}
 />
                    <Stack.Screen name="Forgot" component={Forgot}/>
                  
            </Stack.Navigator>
        </NavigationContainer>
    )
}
