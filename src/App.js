import { Loader } from "./components";
import { useAuth } from "./context";
import { Dashboard, Home } from "./pages";

function App() {
  const { loading, user } = useAuth();

  return (
    <main className="wrapper">
      {loading ? (
        <div className="flex-center h-100">
          <Loader />
        </div>
      ) : ( user ? <Dashboard /> :
        <Home />
      )}
    </main>
  );
}

export default App;
