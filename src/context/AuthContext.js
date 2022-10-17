// ** React Imports
import { createContext, useEffect, useState, ReactNode } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Types
import { AuthValuesType, ErrCallbackType, LoginParams, UserLogged } from './types'
import { LoginService } from 'src/services/api/LoginService'
import { GsoftACL } from 'src/configs/acl'

// ** Defaults
const defaultProvider: AuthValuesType = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  isInitialized: false,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  setIsInitialized: () => Boolean,
  token: undefined
}

const AuthContext = createContext(defaultProvider)

type Props = {
  children: ReactNode
}

const AuthProvider = ({ children }: Props) => {
  // ** States
  const [user, setUser] = useState<UserLogged | null>(defaultProvider.user)
  const [token, setToken] = useState<string | undefined>(defaultProvider.token)
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading)
  const [isInitialized, setIsInitialized] = useState<boolean>(defaultProvider.isInitialized)

  // ** Hooks
  const router = useRouter()

  // inicialização da parte de login do sistema
  // o login de quando o cara sair e fechar a guia do navegador
  // deve ser feito dentro desse effect
  useEffect(() => {
    const initAuth = async (): Promise<void> => {
      setIsInitialized(true)
      setLoading(false)

      const storedToken = await LoginService.getToken()
      if (storedToken instanceof Error) {
        return
      }
      if (storedToken) {
        // seta o spinner para aparecer
        setLoading(true)

        LoginService.getUserData()
          .then(async response => {
            const handlePermissions = (userResponse: UserLogged) => {
              const permissions: GsoftACL[] = []
              const keys = Object.keys(userResponse.permissions)

              for (let i = 0; i < keys.length; i++) {
                for (let i = 0; i < permissions.length; i++) {
                  //erro sinal de <=
                  permissions[i].subject = keys[i]

                  // permissions[i].actions = userResponse.permissions;
                  permissions[i].actions = CheckPermissions(userResponse.permissions[i])
                }
              }
              userResponse.permissions = permissions

              return userResponse
            }

            const CheckPermissions = (action: string) => {
              let actions = [] as string[]
              if (action === 'Edit') {
                actions = ['Edit', 'View']
              }

              if (action === 'View') {
                actions = ['View']
              }

              // if(action === 'Delete'){
              // }
              if (action === 'None') {
                actions = ['None']
              }

              return actions
            }
            if (response instanceof Error) {
              return console.error(response)
            }
            await LoginService.setUser(handlePermissions(response.data))
            setUser(response.data)
            setLoading(false)
            router.replace(router)
          })
          .catch(async error => {
            // esse token não é mais valido
            console.error(error)
            setLoading(false)

            await LoginService.clearToken()
            await LoginService.clearUser()

            router.replace('/login')

            console.log(error)
          })

        // aqui ele tem um token no cookie, mas precisa solicitar o usuario
      } else {
        // tira o spinner
        setLoading(false)
      }
    }
    initAuth()
  }, [])

  // handler para fazer o login
  const handleLogin = (params: LoginParams, errorCallback?: ErrCallbackType) => {
    LoginService.login(params.username, params.password)
      .then(response => {
        setLoading(true)

        if (response instanceof Error) {
          return console.error(response)
        }
        LoginService.setToken(response)
        setToken(response)
        LoginService.getUserData()
          .then(async response => {
            if (response instanceof Error) {
              return console.error(response)
            }
            await LoginService.setUser(response.data)

            setUser(response.data)

            setLoading(false)

            router.replace('/home')
          })
          .catch(error => {
            if (errorCallback) errorCallback(error)
          })
          .finally(() => {
            setLoading(false)
          })
      })
      .catch(error => {
        if (errorCallback) errorCallback(error.response.data)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const handleLogout = async () => {
    setUser(null)
    setIsInitialized(false)
    await LoginService.clearUser()
    await LoginService.clearToken()
    router.push('/login')
  }

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    isInitialized,
    setIsInitialized,
    login: handleLogin,
    logout: handleLogout,
    token
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
