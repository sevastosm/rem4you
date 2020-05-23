import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useLocation,
} from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import ConfirmEmail from "../components/ConfirmEmail/ConfirmEmail";


import Dashboard from "../components/DashBoard/DashBorard";
import ReservationForm from "../components/ReservationForm/ReservationForm";
function NoMatch() {
  return (
    <div>
      <h3>404</h3>
    </div>
  );
}

function ChangePassword(props) {
  return (
    <div>
      <h3>ChangePassword</h3>
    </div>
  );
}

const IntroRoutes = () => {
  return (
    <>
      <Router>
        <div>
          <Switch>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route exact path="/">
              <SignIn />
            </Route>
            <Route path="/confirmemail">
              <ConfirmEmail />
            </Route>
            <Route path="/changepassword">
              <ChangePassword />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            {/* Always last */}
            <Route path="/reservations">
              <ReservationForm />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default IntroRoutes;
