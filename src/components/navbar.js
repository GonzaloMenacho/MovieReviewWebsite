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
                {/*
                    <SearchBar />
                */}

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
}

export default Navbar