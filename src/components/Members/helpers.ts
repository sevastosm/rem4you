import 'babel-polyfill'
import {makeRequest} from '../../api/fetch'
import axios from 'axios'
import { appUrl } from "../../config";

let params1:any = {SearchValue: "ΣΤΕΛ",BOption: 0,DFrom: "12/31/2013",DTo: "12/31/2013",TakeRecs:0,Id:0,LastId:0}

params1=JSON.stringify(params1)
export const  fetchMembers= async ()=>{

    await makeRequest("GET",`http://api.rem4you.com/members/obj?pars=${encodeURIComponent(params1)}`).then(response=>{
      console.log("MEMBERS",response)
    })
    
}



export const  AddMember= async (data)=>{

    let member = data
    await axios.post(`${appUrl}/member/register`, member)
      .then(function (response) {
        console.log("res",response);
      })
      .catch(function (error) {
        console.log("err",error);
      });

}


// Plans 
export const  fetchPlans= async ()=>{
  const response = await axios.get(`${appUrl}/plans/take/0`,
  {
      params: {
          pars: params1
      }
    })
  return response
}