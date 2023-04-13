
import React, { Component } from 'react';
import axios from 'axios';
import ResultsDisplay from './components/resultsdisplay';
import Title from './components/banner';
import SearchBar from './components/searchbar';
import Navbar from './components/navbar';
import './App.css';
import ResultSkel from './components/resultskel';
import CompForMoviePreview from './components/moviePrev_Res';
import MoviePreview from './components/moviepreview';
import NoMovies from './components/nomovies';
import AdvancedSearchTest from './components/advancedsearchtesting'
import GetMovieReviewCache from './components/moviereviewcache';
import FormTest from './components/formtest';
import { MovieReviewContext } from './Context/movie-review-context'
import CarouselComponent from "./components/carouselcomponent";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import MovieReviewList from "./components/moviereviewlist";
import GroupedMovieReviews from './components/reviewPrev';

const client = axios.create({
  baseURL: "http://localhost:5001/api/",
  header: { "X-Custom-Header": "foobar" },
});


export default class App extends React.Component {
  constructor(props) {
    super(props);
        this.state = {
            movieposts: [],
            reviewposts: [],
        };

        this.handleMoviePostChange = this.handleMoviePostChange.bind(this);
        this.handleReviewPostChange = this.handleReviewPostChange.bind(this);
    }

    handleMoviePostChange(moviepost) {
        this.setState({
            movieposts: moviepost
        });
    }

    handleReviewPostChange(reviewpost) {
        this.setState({
            reviewposts: reviewpost
        });
    }

    render() {
        return (
            <div className="app">
                {
                    <MovieReviewContext.Provider value={this.state}>
                        <GetMovieReviewCache
                            onMoviePostChange={this.handleMoviePostChange}
                            onReviewPostChange={this.handleReviewPostChange}
                        />
                    </MovieReviewContext.Provider>
                }
                <div className="nav-bar">
                    <Navbar
                        onMoviePostChange={this.handleMoviePostChange}
                        onReviewPostChange={this.handleReviewPostChange}
                    />
                </div>
                <div className="searchbar">
                    <MovieReviewContext.Provider value={this.state}>
                    <SearchBar
                        onMoviePostChange={this.handleMoviePostChange}
                        onReviewPostChange={this.handleReviewPostChange}
                        />
                    </MovieReviewContext.Provider>
                </div>

                {
                    <div>
                        <Container sx={{ paddingTop: "30px" }}>
                            <CarouselComponent></CarouselComponent>
                        </Container>
                    </div>
                }

                {/*
                    <Container maxWidth="xl" sx={{ paddingTop: "30px" }}>
                        <MovieReviewList />
                    </Container>
                */}

                {
                    <MovieReviewContext.Provider value={this.state}>
                        <ResultsDisplay />
                        <GroupedMovieReviews />
                    </MovieReviewContext.Provider>
                }

                {/*
                <div className="FormTest">
                    <FormTest />
                </div>
                */}

                {/*
                    <div className="results-skel">
                        <ResultSkel />
                    </div>
                */}

                {/*
                    <div>
                        <GroupedMovieReviews />
                        <GroupedMovieReviews />

                    </div>
                */}

                {/*
                { <div>{/* <CompForMoviePreview /> /}</div> }
                { <div>{/* <GroupedReviews /> /}</div> }
                */}

                {/*
                    <div>
                        <GroupedMovieReviews />
                    </div>
            */}

            </div>
        );
    }
}
