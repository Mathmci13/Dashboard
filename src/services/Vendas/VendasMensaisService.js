import { Environment } from "../../configs/environment"
import { API } from "../axios-config"

const vendasRoute = '/VendasDiarias'

const GetAll = async () => {
  try {
    const { data }  = API.get(vendasRoute, {
      headers: {
        'gsoft-wd-token': window.localStorage.getItem(Environment.STORAGE_TOKEN_KEY_NAME)
      }  
    })

    if(data){
      return data
    }

    return new Error('Erro ao listar os registros')
  } catch (error) {
    console.error(error)
    
    return new Error(error || 'Erro ao listar os registros.')
  }
}

export const VendasMensaisService = {
  GetAll,
}