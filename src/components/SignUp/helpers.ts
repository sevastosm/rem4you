import "babel-polyfill";
import { appUrl } from "../../config";


export const registerUser = async (creds:any) => {
  let response = await fetch("https://api.rem4you.com/api/accounts/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(creds),
  });
  let result = await response.json();
  console.log('registerUserresult',result);
};