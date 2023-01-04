import React, { Component } from 'react';
import axios from 'axios';

const client = axios.create({
    baseURL: 'https://localhost:7035/api/',
    header: {'X-Custom-Header': 'foobar'}
});

export default function App() {
    const [posts, setPosts] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() =>
    {
        client.get('/Movies').then((response) => {
            setPosts(response.data);
        }).catch(error => {
            setError(error);
        });
    }, []);

    if (error) return `Error: ${error.message}\nURL: ${client.baseURL}`;
    if (!posts) return (
        <h1>"Searching..."</h1>
        );

    return (
        <div className="app">
            <h2>All Posts</h2>
            {posts.map((post) => {
                return (
                    <div className="post-card" key={post.id}>
                        <h2 className="post-title">{post.title}</h2>
                        <p className="post-rating">{post.rating}</p>
                        <p className="post-desc">{post.description}</p>
                        <div className="button">
                            <div className="delete-btn">Delete</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
