import logo from "../images/logo.png";
import AdvancedBtn from "./advancedbtn";
import AdvancedPopup from "./advancedpopup";
export default function Navbar(props) {
  
  return (
    <nav className="nav">
      <a href="/" className="logo">
        <img className="logo" src={logo}></img>
      </a>
          <AdvancedPopup
              onMoviePostChange={props.onMoviePostChange}
              onReviewPostChange={props.onReviewPostChange}
          ></AdvancedPopup>
    </nav>
  );
}
