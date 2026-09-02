import mainLogo from "../assets/images/logo.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <img src={mainLogo} alt="Logo" />
      </div>
      <ul className="nav-menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/new">New</a>
        </li>
        <li>
          <a href="/popular">Popular</a>
        </li>
        <li>
          <a href="/trending">Trending</a>
        </li>
        <li>
          <a href="/categories">Categories</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
