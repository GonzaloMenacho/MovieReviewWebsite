import React from "react";
import './style.css';

class ResultSkel extends React.Component {
    render(){
        return(
            <div className = "outerBox">
                <div className="movieImage"></div>
                <div className="movieRating">
                    <p>PG-13</p>
                </div>
                <div className="movieReleaseDate">
                    <p>Movie Release: 01/21/2000</p>
                </div>
                <div className="movieName">
                    <p>Joker</p>
                </div>
                <div className="reviewTitle">
                    <p>Amongus</p>
                </div>
                <div className="reviewRating">
                    <p>Stars go here</p>
                </div>
                <div className="review">
                    <p>This movie really reminded me of amongus.</p>
                </div>
            </div>
        )
    };
}

export default ResultSkel;