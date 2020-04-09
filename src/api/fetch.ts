// get token
import { appUrl } from "../config";


let user = {
    username: "gmlogic@gmail.com",
    password: "1Mgergm++"
  };

  let token:string
  
  export const getToken = async () => {
    let response = await fetch("https://api.rem4you.com/api/Token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(user)
    });
    let result = await response.json();
    token =result.access_token
    return result ;
  };
  


  export const makeRequest= async(method:string="POST",url:string ="https://api.rem4you.com/api/Token",body:any=user)=>{
    debugger
    const defaultHeaders={
      "Content-Type": "application/json;charset=utf-8",
      'Authorization': 'Bearer ' + token
    }
    const response = await fetch(url, {
      method: method,
      headers:defaultHeaders,
      body: JSON.stringify(body)
    });
    let result = await response.json();
    return result ;
  };



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