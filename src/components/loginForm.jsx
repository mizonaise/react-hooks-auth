import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login(e){
    e.preventDefault();
    // @todo: send api request to validate data and get token
    if(password === '123'){
        const token = 'Hello Word';
        console.log(token);
    } else {
        alert('wrong details');
    }
}

  return (
    <form>
      <h2 className="mb-3 mt-4">Login</h2>
      <input
        type="email"
        className="form-control"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        className="form-control"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <div className="d-grid gap-2">
        <button className="btn btn-primary" onClick={login}>Login</button>
      </div>
    </form>
  );
}

export default LoginForm;
