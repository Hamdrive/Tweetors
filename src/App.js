import { Footer, Loader, Offline } from "./components";
import { useAuth } from "./context";
import { Dashboard, Home } from "./pages";

function App() {
  const { loading, user } = useAuth();

  return (
    <>
      <main className="wrapper">
        {navigator.onLine ? loading ? (
          <div className="flex-center h-100">
            <Loader />
          </div>
        ) : user ? (
          <Dashboard />
        ) : (
          <Home />
        ) : <Offline />}
      </main>
      <Footer />
    </>
  );
}

export default App;
