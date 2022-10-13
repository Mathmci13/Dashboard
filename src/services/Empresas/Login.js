import { API } from "../axios-config";

const loginRoute = '/Empresas/Login'

const login = async(email, senha) =>{
  API.post(loginRoute, {email,senha})    
}

export const LoginService = {
  login,
}