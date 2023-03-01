import logo from "../images/logo.png";
import React, { useState } from "react";
import AdvancedPopup from "./advancedpopup";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <a href="/" className="logo">
        <img className="logo" src={logo}></img>
      </a>
      <form>
        <input
          className="search-bar"
          type="text"
          placeholder="Search for movies or reviews"
          name="searchbar"
        />
      </form>
      <button>Search</button>
      <button className="advanced-btn" onClick={togglePopup}>
        Advanced
      </button>
      {isOpen && <AdvancedPopup />}
    </nav>
  );
  }