import logo from "../images/logo.png";
import AdvancedBtn from "./advancedbtn";
import AdvancedPopup from "./advancedpopup";
export default function Navbar() {
  
  return (
    <nav className="nav">
      <a href="/" className="logo">
        <img className="logo" src={logo}></img>
      </a>
      <AdvancedPopup></AdvancedPopup>
    </nav>
  );
}
