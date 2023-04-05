import React, { Component } from 'react';
import axios from 'axios';
import ResultsDisplay from './components/resultsdisplay';
import Title from './components/banner';
import SearchBar from './components/searchbar';
import Navbar from './components/navbar';
import './App.css';
import ResultSkel from './components/resultskel';
import CompForMoviePreview from './components/moviePrev_Res';
import GroupedReviews from './components/movieDetails_Res';
import MoviePreview from './components/moviepreview';
import AdvancedSearchTest from './components/advancedsearchtesting'
import GetMovieReviewCache from './components/moviereviewcache';

const client = axios.create({
    baseURL: 'https://localhost:7035/api/',
    header: {'X-Custom-Header': 'foobar'}
});

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movieposts: [],
            reviewposts: []
        };
    }


    render() {
        return (

            
            <div className="app">
                {
                    <GetMovieReviewCache />
                }
                <div className="nav-bar">
                    <Navbar />
                </div>

                {
                <div className="get-review">
                    <SearchBar />
                </div>
                }

                {/*
                    <div className="results-skel">
                        <ResultSkel />
                    </div>
                */}

                {
                    <div>
                        {/* <CompForMoviePreview /> */}
                        <MoviePreview></MoviePreview>
                    </div>

                }
                {
                    <div>
                        <GroupedReviews />
                    </div>

                }
                {/*
                    <div>
                        <AdvancedSearchTest />
                    </div>
                */}
            </div>
        )
    }
}
