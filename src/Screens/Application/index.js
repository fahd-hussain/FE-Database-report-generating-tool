import { useSelector } from "react-redux";

function App() {
  const { token } = useSelector(store => store);

  return (
    <div>
        Hello World
    </div>
  );
}

export default App;
