// ** React Imports
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserService } from "../services/Usuarios/UserService";

// ** Defaults
const defaultProvider = {
  user: null,
  setUser: () => null,
  loading: false,
  setLoading: () => Boolean,
  isAuthenticated: false,
  setIsAuthenticated: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  token: undefined,
};

const AuthContext = createContext(defaultProvider);

const AuthProvider = ({ children }) => {
  // ** States
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [user, setUser] = useState(defaultProvider.user);
  const [token, setToken] = useState(defaultProvider.token);
  const [loading, setLoading] = useState(defaultProvider.loading);

  const navigate = useNavigate();

  useEffect(() => {
    const initAuth = async () => {
      setLoading(true);
      const storedToken = await UserService.getToken();
      if (storedToken instanceof Error) {
        setLoading(false);
        setIsAuthenticated(false);
        return console.error(storedToken);
      }
      if (storedToken) {        
        setToken(storedToken);
        const userData = await UserService.getUserData();
        //retorna 401 se token editado
        if (userData){
          setIsAuthenticated(true)
          await UserService.setUser(userData)
          setLoading(false);
          return
        }
        setIsAuthenticated(false)
      }
      setLoading(false);
    };
    initAuth();
  }, []);

  const handleLogin = async (email, senha) => {
    setLoading(true);
    try {
      const response = await UserService.login(email, senha);
      if (response instanceof Error) {
        setLoading(false);
        return console.error(response);
      }
      UserService.setToken(response);
      setToken(response);
      setIsAuthenticated(true);
      const userData = await UserService.getUserData();
      UserService.setUser(userData);
      setLoading(false);
      navigate("/dashboard");
    } finally {
      setLoading(false);
    }
  };
  const handleLogout = async () => {
    setUser(null);
    setIsAuthenticated(false);
    await UserService.clearUser();
    await UserService.clearToken();
    navigate("/login");
  };

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    isAuthenticated: isAuthenticated,
    setIsAuthenticated: setIsAuthenticated,
    login: handleLogin,
    logout: handleLogout,
    token,
  };

  console.log("Auntenticou?:", isAuthenticated);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
