import React, { Component } from 'react';
import axios from 'axios';
import ReviewDisplay from './components/reviewdisplay';
import Title from './components/banner';
import Reviews from './components/searchreviewusingmovie';
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
                <Navbar/>
                <div className="get-review">
                    <Reviews />
                </div>

                

{/*                <div className="get-all-reviews">
                    <ReviewDisplay />
        </div>*/}
            </div>
        )
    }
}
