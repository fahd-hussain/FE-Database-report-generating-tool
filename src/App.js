import { useSelector } from "react-redux";
import axios from "axios";

function App() {
  const { token } = useSelector(store => store);
  axios.defaults.headers.common['Authorization'] = token;

  return (
    <div>
      Hello World
    </div>
  );
}

export default App;
