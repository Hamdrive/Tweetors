import "./App.css";
import { Loader } from "./components";
import { useAuth } from "./context";
import { Auth, Dashboard } from "./pages";

function App() {
  const { user, error, loading } = useAuth();

  return <main>{loading ? <Loader /> : user ? <Dashboard /> : <Auth />}</main>;
}

export default App;
