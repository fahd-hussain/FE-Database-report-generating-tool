import React, { useContext, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthContext } from "./Utils/authContext";

const AuthProvider = lazy(() => import('./Utils/authProvider'))
const LoginScreen = lazy(() => import('./Screens/Authentication/Login'))
const RegisterScreen = lazy(() => import('./Screens/Authentication/Register'))
const DashboardScreen = lazy(() => import('./Screens/Application/Dashboard'))

export default function App() {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/register">
              <RegisterScreen />
            </Route>
            <Route path="/login">
              <LoginScreen />
            </Route>
            <ApplicationRoute path="/">
              <DashboardScreen />
            </ApplicationRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </Suspense>
  );
}

const ApplicationRoute = ({ children, ...rest }) => {
  let auth = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
