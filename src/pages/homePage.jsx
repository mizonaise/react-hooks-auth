import { useContext } from "react";
import { Header, LoginForm } from "../components";
import { AuthContext } from "../context/authContext";

function HomePage() {
  const authContext = useContext(AuthContext);

  return (
    <div className="container">
      <Header />
      {authContext.auth.email ? "welcome" : <LoginForm />}
    </div>
  );
}

export default HomePage;
