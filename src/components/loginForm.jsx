function LoginForm() {
  return (
    <form>
      <h2>Login</h2>
      <input
        type="email"
        className="form-control"
        placeholder="email"
        // value={email}
        // onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        className="form-control"
        placeholder="password"
        // value={password}
        // onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button className="btn btn-primary">Login</button>
    </form>
  );
}

export default LoginForm;
