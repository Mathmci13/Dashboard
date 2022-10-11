import { API } from "../axios-config";

const empresaRoute = '/Empresas'

const GetAll = async (): Promise<IEmpresa | Error> =>{
  try {
      const { data } = await API.get(empresaRoute, {

      })
  
      if (data){
          return data
      }
  
      return new Error('Erro ao listar os registros.')    
  } catch (error) {
      console.error(error)
      
      return new Error((error as {message: string}).message || 'Erro ao listar os registros.')
  } 
}

const GetById = async (): Promise<IEmpresa | Error> =>{
  try {
    const { data } = await API.get(empresaRoute,{

    })

    if (data){
        return data
    }

    return new Error('Erro ao consultar o registro')
  } catch (error) {
    console.error(error)

    return new Error((error as {message: string}).message || 'Erro ao consultar o registro.')
  }
}