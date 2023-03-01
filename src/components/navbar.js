<<<<<<< HEAD
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
=======
import React from 'react';
import logo from "../images/logo.png"
import SearchBar from './searchreviewusingmovie';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="nav">
                <a href="/" className="logo">
                    <img src={logo}></img>
                </a>
                {
                    
                }

                {/*
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
          */}
            </nav>
        );
    }
>>>>>>> dc5ab81ced8d955ed275b1d08fd30a418b959af5
}

export default Navbar