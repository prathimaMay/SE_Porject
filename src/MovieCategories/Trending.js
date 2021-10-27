import React, { useEffect, useState } from "react";
import MovieTrending from './MovieTrending.js';

const BaseURL = "https://api.themoviedb.org/3";
const Search_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const APIKEY = '04c35731a5ee918f014970082a0088b1'

const Trending = () => {   

const [ movies, setMovies ] = useState([]);

useEffect(() => {
    fetch(''.concat(BaseURL, '/trending/all/day?api_key=', APIKEY))
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setMovies(data.results);
    });
}, []);

return(    
  <div className='movie-container'>
     {movies.length > 0 && movies.map((movie) => 
         <MovieTrending key={movie.id} {...movie} />)}
  </div>
);
}

export default Trending;