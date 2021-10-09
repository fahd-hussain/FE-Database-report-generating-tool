import axios from "axios";
import { AuthContext } from "./authContext";
import { PostRequest } from "./request-handler";

const AuthProvider = ({ children }) => {
  const auth = useAuthProvider();

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuthProvider = () => {
  const token = localStorage.getItem('token');
  axios.defaults.headers.common['Authorization'] = token;

  const login = async (body) => {
    try {
      const resp = await PostRequest({ url: 'auth/login', body })
      localStorage.setItem('token', `Bearer ${resp?.token}`)
      return
    } catch (error) {
      localStorage.removeItem('token');
      throw error;
    }
  };

  const register = async (body) => {
    try {
      const resp = await PostRequest({ url: 'auth/register', body })
      localStorage.setItem('token', `Bearer ${resp?.token}`)
      return
    } catch (error) {
      localStorage.removeItem('token');
      throw error;
    }
  };

  const logout = () => localStorage.removeItem('token');

  return {
    token,
    login,
    register,
    logout
  };
}

export default AuthProvider;