import { API } from "../axios-config";

const empresaRoute = '/Empresas'

const login = async(email:Number, senha:string) =>{
  API.post(empresaRoute, {email,senha})    
}