import {createStackNavigator}  from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Login from '../screen/Login/Login'
import Forgot from '../screen/Login/forgot'
import Portal from './Main_Routes'

const screen = {
    Login : {
        screen : Login,
     
    },
    Forgot : {
        screen : Forgot
    },
    Home : {
        screen : Portal
    }
}
const LoginStack = createStackNavigator(screen, {
    defaultNavigationOptions : {
        headerShown  : false
    }
})

export default createAppContainer(LoginStack)