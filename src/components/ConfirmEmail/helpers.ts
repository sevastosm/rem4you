import 'babel-polyfill'
import {makeRequest} from '../../api/fetch'

export const  confirmEmail= async (userId,code)=>{
  return await makeRequest("GET",`http://api.rem4you.com/api/accounts/ConfirmEmail?userId=${userId}&code=${code}`).then(response=>{
      console.log("confirmEmail",response)
  alert('Email confirmed !')

      return response
    })
    
}
