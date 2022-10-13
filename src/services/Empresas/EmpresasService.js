import { API } from "../axios-config";

const empresaRoute = '/Empresas'

// const GetAll = async (): Promise<IEmpresa | Error> =>{
const GetAll = async () =>{
  try {
      const { data,headers } = await API.get(empresaRoute, {

      })
  
      if (data){
          return {data,
                  ItemsPerPage: Number(headers.ItemsPerPage),
                  TotalItems: Number(headers.TotalItems),
                  TotalPages: Number(headers.TotalPages),
                  CurrentPage: Number(headers.CurrentPage)}
      }
  
      return new Error('Erro ao listar os registros.')    
  } catch (error) {
      console.error(error)
      
      return new Error(error || 'Erro ao listar os registros.')
  }
} 

// const GetById = async (): Promise<IEmpresa | Error> =>{
const GetById = async () =>{
  try {
    const { data } = await API.get(empresaRoute,{

    })

    if (data){
        return data
    }

    return new Error('Erro ao consultar o registro')
  } catch (error) {
    console.error(error)

    return new Error(error  || 'Erro ao consultar o registro.')
  }
}

export const EmpresaService = {
 GetAll,
 GetById, 
}