import 'babel-polyfill'
import {makeRequest} from '../../api/fetch'

export const  confirmEmail= async (userId,code)=>{
  console.log('tests',code)
  const id = encodeURIComponent(userId)
  const usercode = encodeURIComponent(code)
  return await makeRequest("GET",`http://api.rem4you.com/api/accounts/ConfirmEmail?userId=${id}&code=${usercode}`).then(response=>{
      return response
    })
}
