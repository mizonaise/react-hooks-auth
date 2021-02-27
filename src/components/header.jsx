import { useContext } from "react";
import { AuthContext } from "../context/authContext";

function Header() {
  const authContext = useContext(AuthContext);

  function logout() {
    authContext.setAuth({});
  }

  return (
    <nav className="navbar navbar-light bg-light mt-2 mb-2">
      <div className="container-fluid">
        <a className="navbar-brand mb-0 h1" href="/">
          React Hooks
        </a>

        <div>
          {authContext.auth.email ? (
            <div>
              {authContext.auth.email}{" "}
              <button className="btn btn-danger btn-sm" onClick={logout}>
                Logout
              </button>
            </div>
          ) : (
            "you need to login"
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
