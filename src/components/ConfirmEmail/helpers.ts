import 'babel-polyfill'
import {makeRequest} from '../../api/fetch'

export const  confirmEmail= async (userId,code)=>{
  console.log('tests',code)
  const id = encodeURI(userId)
  const usercode = encodeURI(code)

  
  return await makeRequest("GET",`http://api.rem4you.com/api/accounts/ConfirmEmail?userId=${id}&code=${usercode}`).then(response=>{
    debugger   
  console.log("confirmEmail",response)
  alert('Email confirmed !')

      return response
    })
    
}
