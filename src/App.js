import React, { Component } from 'react';
import axios from 'axios';
import ReviewDisplay from './components/reviewdisplay';
import Reviews from './components/searchreviewusingmovie';

const client = axios.create({
    baseURL: 'https://localhost:7035/api/',
    header: {'X-Custom-Header': 'foobar'}
});

export default class App extends React.Component {

    render() {
        return (
            <div className="app">
                <div className="get-review">
                    <div className="search">
                        What movie would you like to find?
                    </div>
                    <hr />
                    <Reviews />
                </div>
                <hr />

                <div className="get-all-reviews">
                    <ReviewDisplay />
                </div>
            </div>
        )
    }
}
