import { useState, useEffect, createContext } from "react";

export const AuthContext = createContext();

export function AuthProvider(Props) {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    // @todo: validate token with api
    if (email) {
      setAuth({
        token,
        email,
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {Props.children}
    </AuthContext.Provider>
  );
}
