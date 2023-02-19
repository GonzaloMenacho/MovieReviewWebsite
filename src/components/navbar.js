import logo from "../images/logo.png"

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="logo">
      <img src={logo}></img> 
      </a>
          <form>
            <input
              className="search-bar"
              type="text"
              placeholder="Search for movies or reviews"
              name="searchbar"
            />
            <button>Search</button>
            <button>Advanced</button>
          </form>
    </nav>
  );
}
