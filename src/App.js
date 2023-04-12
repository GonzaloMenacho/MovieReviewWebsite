
import React, { Component } from 'react';
import axios from 'axios';
import ResultsDisplay from './components/resultsdisplay';
import Title from './components/banner';
import SearchBar from './components/searchbar';
import Navbar from './components/navbar';
import './App.css';
import ResultSkel from './components/resultskel';
import CompForMoviePreview from './components/moviePrev_Res';
import GroupedMovieReviews from './components/movieDetails_Res';
import MoviePreview from './components/moviepreview';
import NoMovies from './components/nomovies';
import AdvancedSearchTest from './components/advancedsearchtesting'
import GetMovieReviewCache from './components/moviereviewcache';
import FormTest from './components/formtest';
import CarouselComponent from "./components/carouselcomponent";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import MovieReviewList from "./components/moviereviewlist";


const client = axios.create({
  baseURL: "https://localhost:7035/api/",
  header: { "X-Custom-Header": "foobar" },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movieposts: [],
      reviewposts: [],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="nav-bar">
          <Navbar />
        </div>

        {
          <div className="get-review">
            <SearchBar />
          </div>
        }

        {
          <div>
            <Container sx={{ paddingTop: "30px" }}>
              <CarouselComponent></CarouselComponent>
            </Container>
          </div>
        }
        {
          <Container maxWidth="xl"  sx={{ paddingTop: "30px" }}>
            <MovieReviewList />
          </Container>
        }

        {/*
                    <div className="results-skel">
                        <ResultSkel />
                    </div>
                */}

                {
                    <div>
                        <GroupedMovieReviews />
                        <GroupedMovieReviews />

                    </div>
                }
            </div>
        )

    }

        {<div>{/* <CompForMoviePreview /> */}</div>}
        {<div>{/* <GroupedReviews /> */}</div>}

        {/*
                    <div>
                        <AdvancedSearchTest />
                    </div>
                */}
      </div>
    );
  }
}
