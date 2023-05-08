import React  from 'react';
import Login from '../screen/Login/Login'
import Forgot from '../screen/Login/forgot'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

export default function StackNavigator()  {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown : false}}>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Forgot" component={Forgot}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
