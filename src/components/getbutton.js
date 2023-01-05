import styled from 'styled-components';
import { sayHello, HelloButton } from './hellobutton';

export const GetAllButton = styled.button`
    background-color: #4fa579;
    color: white;
    font-size: 20px;
    padding: 10px 60px;
    border-radius: 5px;
    margin: 10px 0px;
    cursor: pointer;
`;

export function getAllReviews(posts) {
    alert("Success?")
    return (
        <div className="reviews">
            <h2>All Reviews</h2>
            {posts.map((post) => {
                return (
                    <div className="post-card" key={post.id}>
                        <h2 className="post-title">{post.title}</h2>
                        <p className="post-rating">{post.rating}</p>
                        <p className="post-desc">{post.description}</p>
                        <div className="button">
                            <HelloButton onClick={sayHello}>Hello!</HelloButton>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}