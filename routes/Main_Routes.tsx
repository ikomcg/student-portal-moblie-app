import React, {useContext} from 'react'
import { UserContext } from '../context/LoginProvider'
import Portal_Routes from './Custom_Drawer'
import StackNavigator from './Login'


const Main_Routes = () => {
  const {isLoggedIn} = useContext(UserContext)
  return (
    <>
      {
        !isLoggedIn ? <Portal_Routes/> : <StackNavigator/>
      }
    </>

  )
}

export default Main_Routes