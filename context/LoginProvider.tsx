import React,{SetStateAction, createContext, useState} from 'react'
import { boolean } from 'yup'

type LoggedType = {
    isLoggedIn : boolean
    toggleIsLogged : (value : boolean) => void
}
export const UserContext = createContext<LoggedType>({
    isLoggedIn : false,
    toggleIsLogged : () => {}
})

type LoginProviderType = {
    children : React.ReactNode
}
const LoginProvider = ({children} : LoginProviderType) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  const toggleIsLogged = (value : boolean) => {
    setIsLoggedIn(value)
  }

  return (
    <UserContext.Provider value={{isLoggedIn, toggleIsLogged}}>
        {
            children
        }
    </UserContext.Provider>
  )
}

export default LoginProvider