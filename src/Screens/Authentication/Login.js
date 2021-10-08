import { useContext, useState } from "react";
import "./styles.css";
import CustomInput from "../../Components/CustomInput";
import { Button } from "@material-ui/core";
import { AuthContext } from "../../Utils/authContext";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";

const LoginScreen = ({ title }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory();
  const location = useLocation();

  const auth = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const { from } = location?.state || { from: { pathname: "/" } };
      await auth.login({ email, password })
      history.push(from)
    } catch (error) {
      console.warn(error);
    }
  }

  return <div className="App">
    <form className="form">
      <h1>LOGIN</h1>
      <CustomInput
        labelText="Email"
        id="email"
        formControlProps={{
          fullWidth: true
        }}
        handleChange={event => setEmail(event.target.value)}
        type="text"
      />
      <CustomInput
        labelText="Password"
        id="password"
        formControlProps={{
          fullWidth: true
        }}
        handleChange={event => setPassword(event.target.value)}
        type="password"
      />

      <Button type="button" color="primary" className="form__custom-button" onClick={handleLogin}>
        Log in
      </Button>
      <div>Do not have an account? <Link to="/register" className="link">REGISTER</Link></div>
    </form>
  </div>
}

export default LoginScreen