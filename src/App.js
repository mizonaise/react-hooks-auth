import HomePage from "./pages/homePage";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <AuthProvider>
      <HomePage />
    </AuthProvider>
  );
}

export default App;
