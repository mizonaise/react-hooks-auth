function Header() {
  return (
    <nav className="navbar navbar-light bg-light mt-2 mb-2">
      <div className="container-fluid">
        <a className="navbar-brand mb-0 h1" href="/">
          React Hooks
        </a>

        <div>
          <div>
            <button className="btn btn-danger btn-sm">Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
