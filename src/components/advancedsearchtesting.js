import React from "react";
import axios from "axios";

const client = axios.create({
    baseURL: "https://localhost:7035/api/",
    header: { "X-Custom-Header": "foobar" }
})

class AdvancedSearchTest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchterm: "",
            movieposts: [],
            reviewposts: [],
            movieTitle: "",
            reviewKeyword: "",
        };
    }

    render() {
        return (
            <>
                <form id="adv-form"
                    method="post"
                    action="api/Movies/advSearchV2"
                    enctype="application/x-www-form-urlencoded">
                <label>Movie Title:
                        <input onSubmit={this.handleSubmit}
                        type="text"
                        onChange={this.changeValue}
                        name="movie-title-input"
                        value={this.state.movieTitle}
                    />
                    <input
                        type="text"
                        onChange={this.changeValue}
                        name="review-keyword-input"
                        value={this.state.reviewKeyword}
                    />
                    </label>
                <input type="submit" />
            </form>
            </>
        )
    }

    changeValue = (event) => {
        this.setState({
            searchterm: event.target.value
        });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        await client.post
    } 

}


export default AdvancedSearchTest