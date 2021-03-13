import AuthProvider from "./contexts/AuthContext";
import FlagsProvider from "./contexts/FlagsProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/site/Dashboard";
import Signup from "./components/auth/Signup";

import Login from "./components/auth/Login";
import UpdateProfile from "./components/auth/UpdateProfile";
import ForgotPassword from "./components/auth/ForgotPassword";

export default function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <FlagsProvider
            defaults={{
              someAwesomeFeatureEnabled: false,
            }}
          >
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </FlagsProvider>
        </AuthProvider>
      </Router>
    </div>
  );
}
