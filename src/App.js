import React, { Component } from 'react';
import axios from 'axios';
import ReviewDisplay from './components/reviewdisplay';
import Title from './components/banner';
import SearchBar from './components/searchreviewusingmovie';
import Navbar from './components/navbar';
import './App.css';

const client = axios.create({
    baseURL: 'https://localhost:7035/api/',
    header: {'X-Custom-Header': 'foobar'}
});

export default class App extends React.Component {

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
                {/*
                <div className="get-all-reviews">
                    <ReviewDisplay />
                </div>
                */}
            </div>
        )
    }
}
