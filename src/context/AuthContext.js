// ** React Imports
import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { UserService } from '../services/Usuarios/UserService'

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
  const [isAuthenticated, setIsAuthenticated] = useState(defaultProvider.isAuthorized)
  const [user, setUser] = useState(defaultProvider.user)
  const [token, setToken] = useState(defaultProvider.token)
  const [loading, setLoading] = useState(defaultProvider.loading)

 const navigate = useNavigate()

  useEffect(() => {
    const initAuth = async () =>{
      // setLoading(false)

      const storedToken = await UserService.getToken()
      if (storedToken instanceof Error) {
        return console.error(storedToken)
      }
      if (storedToken){
        console.log('dentro do if: ',storedToken)
        // setLoading(true)

        // UserService.getUserData
        // UserService.setUser
        // setLoading(false)
      }
    }
    initAuth()
  }, [])
  
  const handleLogin = (params) => {
    UserService.login(params.email, params.senha).then(response => {
      setLoading(true)

      if (response instanceof Error) {
        return console.error(response)
      }
      UserService.setToken(response)
      setToken(response)
      setLoading(false)
      navigate('/dashboard')

    })
    .finally(()=>{
      setLoading(false)
    })

  }
  const handleLogout = async () => {
    setUser(null)
    setIsAuthenticated(false)
    await UserService.clearUser()
    await UserService.clearToken()
    navigate('/login',)
    // redirecionar para login
  }

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    isAuthenticated: isAuthenticated,
    setIsAuthenticated: setIsAuthenticated,
    login: handleLogin,
    logout: handleLogout,
    token
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
  }

export { AuthContext, AuthProvider }
