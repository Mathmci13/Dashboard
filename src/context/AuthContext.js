// ** React Imports
import { createContext, useEffect, useState } from 'react'
import { LoginService } from '../services/Empresas/LoginService'

// ** Types
// import { AuthValuesType, ErrCallbackType, LoginParams, UserLogged } from './types'


// ** Defaults
const defaultProvider = {
  user: null,
  setUser: () => null,
  loading: true,
  setLoading: () => Boolean,
  isAuthorized: false,
  setIsAuthorized: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  token: undefined
}

const AuthContext = createContext(defaultProvider)


const AuthProvider = ({ children }) => {
  // ** States
  const [user, setUser] = useState(defaultProvider.user)
  const [token, setToken] = useState(defaultProvider.token)
  const [loading, setLoading] = useState(defaultProvider.loading)
  const [isAuthorized, setIsAuthorized] = useState(defaultProvider.isAuthorized)

  useEffect(() => {
    const initAuth = async () =>{
      setIsAuthorized(true)
      setLoading(false)

      const storedToken = await LoginService.getToken()
      console.log('oi ', storedToken)
      if (storedToken instanceof Error) {
        return console.error(storedToken)
      }
      if (storedToken){
        setLoading(true)

        // LoginService.getUserData
        // LoginService.setUser
        setLoading(false)
      }
    }
    initAuth()
  }, [])
  
  // const handleLogin = (params: LoginParams) => {
  const handleLogin = (params) => {
    LoginService.login(params.username, params.password).then(response => {
      setLoading(true)

      if (response instanceof Error) {
        return console.error(response)
      }
      LoginService.setToken(response)
      setToken(response)
      setLoading(false)

      // redirecionar /home
    })
    .finally(()=>{
      setLoading(false)
    })

  }
  const handleLogout = async () => {
    setUser(null)
    setIsAuthorized(false)
    await LoginService.clearUser()
    await LoginService.clearToken()
    // redirecionar para login
  }

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    isAuthorized,
    setIsAuthorized,
    login: handleLogin,
    logout: handleLogout,
    token
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
  }

export { AuthContext, AuthProvider }
