import { useContext, useState } from "react";
import "./styles.css";
import CustomInput from "../../Components/CustomInput";
import { Button } from "@material-ui/core";
import { AuthContext } from "../../Utils/authContext";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";

const RegisterScreen = ({ title }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRepassword] = useState('')

  const [error, setError] = useState(null)
  const history = useHistory();
  const location = useLocation();

  const auth = useContext(AuthContext);

  const handleRegister = async () => {
    try {
      if (password !== repassword) {
        setError("Password does not match")
      }
      const { from } = location?.state || { from: { pathname: "/" } };
      await auth.register({ email, password })
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
        error={error}
        handleChange={event => setPassword(event.target.value)}
        type="password"
      />
      <CustomInput
        labelText="Re-enter Password"
        id="re-password"
        formControlProps={{
          fullWidth: true
        }}
        error={error}
        handleChange={event => setRepassword(event.target.value)}
        type="password"
      />
      <Button type="button" color="primary" className="form__custom-button" onClick={handleRegister}>
        Register
      </Button>
      <div>Already have an account? <Link to="/login" className="link">LOGIN</Link></div>
    </form>
  </div>
}

export default RegisterScreen