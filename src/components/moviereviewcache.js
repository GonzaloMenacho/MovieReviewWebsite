import axios from "axios";
//import some review display component;

const movieReviewCache = {};

const client = axios.create({
    baseURL: "https://localhost:7035/api/",
    header: { "X-Custom-Header": "foobar" },
});

export const getMovieReviewCache = async () => {
    if (!movieReviewCache) {  // if the cache doesnt have data
        // load the data and add it to cache
        const { data } = await client.get('Movies/initialize-cache');
        movieReviewCache = data;
    }

    return movieReviewCache;
}