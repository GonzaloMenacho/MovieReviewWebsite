import logo from "../images/logo.png";
import AdvancedBtn from "./advancedbtn";
export default function Navbar() {
  
  return (
    <nav className="nav">
      <a href="/" className="logo">
        <img className="logo" src={logo}></img>
      </a>
    </nav>
  );
}
