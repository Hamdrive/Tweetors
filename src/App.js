import { Loader } from "./components";
import { useAuth } from "./context";
import { Home } from "./pages";

function App() {
  const { loading } = useAuth();

  return <>{loading ? <Loader /> : <Home />}</>;
}

export default App;
