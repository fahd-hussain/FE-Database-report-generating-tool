import React, { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthContext } from "./Utils/authContext";
import { PostRequest } from "./Utils/request-handler";
import LoginScreen from "./Screens/Authentication/Login";
import RegisterScreen from "./Screens/Authentication/Register";
import axios from "axios";

export default function AuthExample() {
  return (
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
            <div>Hello</div>
          </ApplicationRoute>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

function AuthProvider({ children }) {
  const auth = useProvideAuth();

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

function useProvideAuth() {
  const [token, setToken] = useState(null);

  const login = async (body) => {
    try {
      const resp = await PostRequest({ url: 'auth/login', body })
      if (resp?.data) {
        setToken(resp?.data?.token)
        axios.defaults.headers.common['Authorization'] = resp?.data?.token;
      }
    } catch (error) {
      setToken(null)
      throw error
    }
  };

  const register = async (body) => {
    try {
      const resp = await PostRequest({ url: 'auth/register', body })
      if (resp?.data) {
        setToken(resp?.data?.token)
        axios.defaults.headers.common['Authorization'] = resp?.data?.token;
      }
    } catch (error) {
      setToken(null)
      throw error
    }
  };

  const logout = () => setToken(null)

  return {
    token,
    login,
    register,
    logout
  };
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
