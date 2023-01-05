import React from 'react';
import axios from 'axios';
const client = axios.create({
    baseURL: 'https://localhost:7035/api/',
    header: { 'X-Custom-Header': 'foobar' }
});

class Reviews extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movie: "",
            title: "",
            rating: "",
            description: ""
        };
    }

    render() {
        return (
            <div className="reviews">
                <label htmlFor="text">Enter Movie</label>
                <br />
                <div id="movie">
                    <input onChange={this.changeValue}
                        type="text" value={this.state.movie} />
                </div>
                <div className="button">
                    <button onClick={this.getReview}>
                        Get Reviews
                    </button>
                </div>
                <div>
                    <h1>Movie: {this.state.title}</h1>
                    <h3>Rating: {this.state.rating}</h3>
                    <h3>Description: {this.state.description}</h3>
                </div>
            </div>              
        );
    }

    changeValue = (event) => {
        this.setState({
            movie: event.target.value
        });
    }

    getReview = () => {
        client.get(`/Movies/${this.state.movie}`).then((response) => {
            this.setState({
                title: response.data.title,
                rating: response.data.rating,
                description: response.data.description
            })
        });
    }

}

export default Reviews;