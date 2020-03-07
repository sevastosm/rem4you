// get token
let user = {
    username: "gmlogic@gmail.com",
    password: "1Mgergm++"
  };
  
  export const getToken = async () => {
    let response = await fetch("https://api.rem4you.com/api/Token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(user)
    });
    let result = await response.json();
    return result ;
  };
  