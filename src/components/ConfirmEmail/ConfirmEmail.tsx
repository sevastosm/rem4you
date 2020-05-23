import * as React from "react";
import * as queryString from 'query-string'
import {confirmEmail} from './helpers'
 
import {
    BrowserRouter as Router,
    useLocation,
  } from "react-router-dom";

interface IAppProps {
}

const useEffect= React.useEffect

const ConfirmEmail: React.FunctionComponent<IAppProps> = props => {

   

    const location =useLocation();
    const values = queryString.parse(location.search)
    console.log(values.userId)
    console.log(values.code)
    useEffect(() => {
      confirmEmail(values.userId,values.code)
    }, [])  
  return (

   <div>Cinfrm mail</div>
  );
};

export default ConfirmEmail;
