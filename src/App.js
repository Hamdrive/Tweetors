import "./App.css";
import { Loader } from "./components";
import { useAuth } from "./context";
import { Home } from "./pages";

function App() {
  const { loading } = useAuth();

  return <main>{loading ? <Loader /> : <Home />}</main>;
}

export default App;
