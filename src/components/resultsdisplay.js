import React from 'react';
import EventEmitter from 'events';

class ResultsDisplay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movieposts: [],
            reviewposts: []
        };
    }

    render() {
        return (
        <div className="results-display">
        {
            this.props.movieposts &&
            <div className="all-movies-display" key="movies">
                {this.props.movieposts.map((post, index) => {
                    return (
                        <div className="post-card" key={index}>
                            <h2 className="post-title">{post.title}</h2>
                            <p className="post-rating">Rating: {post.movieIMDbRating}</p>
                            <p className="post-desc">Description: {post.description}</p>
                            <hr />
                        </div>
                    );
                })}
            </div>
        }

        {
            this.props.reviewposts &&
            <div className="all-reviews-display" key="reviews">
                {this.props.reviewposts.map((moviereviewlist, index) => {
                    return (
                        <div key={index}>
                            {moviereviewlist.map((review, i) => {
                                return (
                                    <div className="review-card" key={i}>
                                        <h3 className="review-title">{review.reviewTitle}</h3>
                                        {/*<p className="review-body">{review.reviewBody}</p> */}
                                    </div>
                                )
                            })}
                            <hr />
                        </div>
                    )
                })}
            </div>
                }
        </div>
        );
    }
}

export default ResultsDisplay;