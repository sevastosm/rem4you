import * as React from "react";
import * as queryString from "query-string";
import { confirmEmail } from "./helpers";

import { BrowserRouter as Router, useLocation } from "react-router-dom";

interface IAppProps {}

const useEffect = React.useEffect;
const useState = React.useState;


const ConfirmEmail: React.FunctionComponent<IAppProps> = (props) => {

  const [message, setResponseMessage] = useState(null);

  const location = useLocation();
  const values = queryString.parse(location.search);
  const correctedus: any = values.userId.split(" ").join("+");
  const corrected: any = values.code.split(" ").join("+");
  useEffect(() => {
    confirmEmail(correctedus, corrected).then((response) => {
      if(response){
        response.result ==="Ok"?setResponseMessage("Acount Activated"):setResponseMessage(response.result)
      }
    });
  }, []);
  return (
    <div>
      Confirm mail
      <h4>{message&&`Acount confirmation: ${message}`}</h4>
    </div>
  );
};

export default ConfirmEmail;
